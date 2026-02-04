import { getBooksCollection } from '../db/collection.js';
import { createCollectionFromFile } from './createCollectionFromFile.js';
import { createUpdatesDocument } from './createUpdatesDocument.js';

import { fileURLToPath } from 'url';
import { dirname, join, basename } from 'path';

const _dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(_dirname, '..', 'books.json');

export async function getAllBooks() {
  const booksCollection = await getBooksCollection();
  const amount = await booksCollection.countDocuments();
  const fileName = basename(filePath);

  if (!amount) {
    await createCollectionFromFile(filePath, booksCollection);
    await createUpdatesDocument(fileName);
  } else {
    const data = await booksCollection.find().toArray();
    console.log(data);
    console.log(`Data already exist`);
    return;
  }
}

export default getAllBooks;
