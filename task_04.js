// Task 04

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_4.csv і повертає масив масивів рядків. Тобто:
// [
//  ["Atlas Protocol", 2004, 4.0, ],

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function task_04(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, {
      delimiter: '=',
      from: 2,
      cast: function (value) {
        return Number(value) ? Number(value) : value;
      },
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
