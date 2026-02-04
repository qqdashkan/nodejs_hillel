import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';
import { setClient } from './db/db.js';

import { getAllBooks } from './utilities/index.js';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    setClient(client);
    console.log('✅ You successfully connected to MongoDB!');

    await getAllBooks();
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
