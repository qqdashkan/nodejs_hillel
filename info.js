import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
const _filename = fileURLToPath(import.meta.url);

import { MongoClient } from 'mongodb';
import { setClient } from './db/db.js';
import { getBooksCollection } from './db/collection.js';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    setClient(client);
    console.log('✅ You successfully connected to MongoDB!');

    //await getAllNameBooks();
    //await getAllGenres();
    //await getBooksByRating();
    await setGenre();
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

async function getAllNameBooks() {
  const collection = await getBooksCollection();
  const res = await collection.countDocuments();
  console.log(res);

  const projectFields = { _id: 0, title: 1 };
  const cursor = collection.find().project(projectFields);

  for await (const doc of cursor) {
    console.dir(doc.title);
  }

  await client.close();
}

async function getAllGenres() {
  const param = process.argv[2];

  if (param === '--genre') {
    const collection = await getBooksCollection();
    const res = await collection.countDocuments();
    console.log(res);

    const projectFields = { _id: 0, genre: 1 };
    const cursor = collection.find().project(projectFields);

    for await (const doc of cursor) {
      console.dir(doc.genre);
    }
  } else {
    await client.close();
  }
}

async function getBooksByRating() {
  const param = process.argv[2];
  const numberMatch = param.match(/[0-9.]+/);
  const number = parseFloat(numberMatch[0]);

  if (param) {
    const collection = await getBooksCollection();
    const res = await collection.countDocuments();
    console.log(res);

    const cursor = await collection.find({
      rating: { $gte: number },
    });

    for await (const doc of cursor) {
      console.dir(doc);
    }
  } else {
    await client.close();
  }
}

async function setGenre() {
  const param = process.argv[2];
  const match = param.includes('classical');

  if (match) {
    const collection = await getBooksCollection();
    const res = await collection.countDocuments();
    console.log(res);

    const filter = { tags: { $exists: true } };
    const update = { $push: { tags: 'classical' } };

    const response = await collection.updateMany(filter, update);

    console.log(response.modifiedCount);
  } else {
    await client.close();
  }
}
