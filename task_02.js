// Task 02

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_2.csv і повертає масив об'єктів.
// В цьому CSV файлів не буде помилок.

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function task_02(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, { columns: true });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
