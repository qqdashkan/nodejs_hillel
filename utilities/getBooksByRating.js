import { getBooksCollection } from '../db/collection.js';

export async function getBooksByRating() {
  const param = process.argv[2];
  const numberMatch = param?.match(/[0-9.]+/);

  if (numberMatch) {
    const rating = parseFloat(numberMatch[0]);
    const booksCollection = await getBooksCollection();

    if (!booksCollection) {
      return;
    }

    const cursor = await booksCollection.find({
      rating: { $gte: rating },
    });

    for await (const doc of cursor) {
      console.dir(doc);
    }
  }
}

export default getBooksByRating;
