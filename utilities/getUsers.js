import { readFile } from 'fs/promises';
import { join } from 'path';
import { getDirname } from './getDirname.js';

export async function getUsers() {
  const filePath = join(getDirname(import.meta.url), '..', 'users.json');
  const data = await readFile(filePath, 'utf-8');

  if (!data) {
    throw new Error('DATA_NOT_FOUND');
  }

  return JSON.parse(data);
}
