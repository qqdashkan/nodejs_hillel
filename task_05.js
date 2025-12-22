// Task 05

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_5.csv і повертає масив об'єктів. У цьому файлу є проблема - зайві пусті рядки.

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function task_05(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, {
      columns: true,
      skip_empty_lines: true,
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
