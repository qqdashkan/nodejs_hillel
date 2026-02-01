import { getDb } from './db.js';

let COLLECTION_BOOKS;
let COLLECTION_MIGRATION;

export function getBooksCollection() {
  if (!COLLECTION_BOOKS) {
    const DB = getDb(process.env.DB_NAME);
    COLLECTION_BOOKS = DB.collection('books');
  }
  return COLLECTION_BOOKS;
}

export function getMigrationsCollection() {
  if (!COLLECTION_MIGRATION) {
    const DB = getDb(process.env.DB_NAME);
    COLLECTION_MIGRATION = DB.collection('migrations');
  }
  return COLLECTION_MIGRATION;
}
