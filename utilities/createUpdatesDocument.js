import {
  getBooksCollection,
  getMigrationsCollection,
} from '../db/collection.js';

export async function createUpdatesDocument(name) {
  const migrationsCollection = await getMigrationsCollection();
  const booksCollection = await getBooksCollection();
  const amount = await booksCollection.countDocuments();

  await migrationsCollection.insertOne({
    file_name: name,
    count: amount,
    createdAt: new Date(),
  });
  console.log(`Document was created.`);
}

export default createUpdatesDocument;
