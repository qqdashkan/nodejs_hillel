import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';
import { setClient } from './db/db.js';

import {
  setNewGenre,
  getBooksByRating,
  getAllBooksGenres,
  getAllBooksTitles,
  getAllBooksAuthors,
} from './utilities/index.js';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    setClient(client);
    console.log('✅ You successfully connected to MongoDB!');

    await getAllBooksTitles();
    await getAllBooksAuthors();
    await getAllBooksGenres();
    await getBooksByRating();
    await setNewGenre();
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
