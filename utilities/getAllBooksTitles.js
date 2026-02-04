import { getBooksCollection } from '../db/collection.js';

export async function getAllBooksTitles() {
  const param = process.argv;
  if (param.length > 2) {
    return;
  }
  const booksCollection = await getBooksCollection();

  if (!booksCollection) {
    return;
  }

  const amount = await booksCollection.countDocuments();
  console.log(amount);

  if (!amount) {
    return;
  }

  const fields = { _id: 0, title: 1 };
  const cursor = await booksCollection.find().project(fields);

  for await (const doc of cursor) {
    console.dir(doc.title);
  }
}

export default getAllBooksTitles;
