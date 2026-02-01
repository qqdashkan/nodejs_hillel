import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';
import {
  getBooksCollection,
  getMigrationsCollection,
} from './db/collection.js';
import { setClient } from './db/db.js';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const _dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(_dirname, 'books.json');

async function run() {
  try {
    await client.connect();
    setClient(client);
    console.log('✅ You successfully connected to MongoDB!');

    await getAllBooks();
    await getCountDocuments();
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

async function getAllBooks() {
  const cursor = await getBooksCollection().find();
  const data = await cursor.toArray();
}

async function getCountDocuments() {
  const collection = await getBooksCollection();
  const res = await collection.countDocuments();
  console.log(res);

  if (!res) {
    const books = await readFile(filePath, 'utf-8');
    console.log(books);
    await collection.insertMany(JSON.parse(books));
    await saveUpdates();
  } else {
    console.log(`Data already exist`);
    return res;
  }
}

async function saveUpdates() {
  const collection = await getMigrationsCollection();
  const booksCollection = await getCountDocuments();

  await collection.insertOne({
    file_name: 'books.json',
    count: booksCollection,
    updatedAt: new Date(),
  });

  console.log(`Document was updated`);
}
