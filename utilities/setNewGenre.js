import { getBooksCollection } from '../db/collection.js';

export async function setNewGenre() {
  const param = process.argv[2];
  const match = param?.includes('classical');

  if (match) {
    const booksCollection = await getBooksCollection();
    if (!booksCollection) {
      return;
    }
    const filter = { tags: { $exists: true } };
    const update = { $push: { tags: 'classical' } };

    const response = await booksCollection.updateMany(filter, update);

    console.log(response.modifiedCount);
  }
}

export default setNewGenre;
