import { getBooksCollection } from '../db/collection.js';

export async function getAllBooksAuthors() {
  const param = process.argv[2];

  if (param === '--authors') {
    const booksCollection = await getBooksCollection();

    if (!booksCollection) {
      return;
    }
    const fields = { _id: 0, author: 1 };
    const cursor = await booksCollection.find().project(fields);

    for await (const doc of cursor) {
      console.dir(doc.author);
    }
  }
}

export default getAllBooksAuthors;
