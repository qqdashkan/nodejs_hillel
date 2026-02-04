import { getBooksCollection } from '../db/collection.js';

export async function getAllBooksGenres() {
  const param = process.argv[2];

  if (param === '--genre') {
    const booksCollection = await getBooksCollection();

    if (!booksCollection) {
      return;
    }

    const genres = await booksCollection.distinct('genre');
    for await (const doc of genres) {
      console.dir(doc);
    }
  }
}

export default getAllBooksGenres;
