import { readFile } from 'fs/promises';

export async function createCollectionFromFile(path, collection) {
  const data = await readFile(path, 'utf-8');
  await collection.insertMany(JSON.parse(data));
  console.log('Collection has been created.');
}

export default createCollectionFromFile;
