// Task 08

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_8.csv і повертає масив об'єктів.

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function task_08(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, {
      columns: true,
      skip_empty_lines: true,
      skip_records_with_error: true,
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
