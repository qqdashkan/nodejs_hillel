import { readFile } from 'fs/promises';
import { join } from 'path';
import { getDirname } from './getDirname.js';

export async function getGoods() {
  const filePath = join(
    getDirname(import.meta.url),
    '..',
    'data',
    'goods.json',
  );
  const data = await readFile(filePath, 'utf-8');

  if (!data) {
    throw new Error('Data Not Found');
  }

  return JSON.parse(data);
}
