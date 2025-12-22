// Task 06

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_6.csv і повертає масив об'єктів. Зауважте - деяки рядки не містять повні дані іх треба фільтрувати за допомогою csv-parse.

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function task_06(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, {
      columns: true,
      skip_records_with_error: true,
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
