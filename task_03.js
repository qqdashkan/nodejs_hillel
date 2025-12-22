// Task 03

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_3.csv і повертає масив об'єктів.
// При читанні пропустіть рядки так, щоб результат починався з "Title" : "Phantom...". Тобто результат повинен починатися так:
// [
//     { "Title" : "Phantom Array"

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function task_03(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, { columns: true, from: 2 });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
