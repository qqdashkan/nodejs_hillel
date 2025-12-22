// Task 07

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_7.csv і повертає масив об'єктів.
// Забезпечьте видалення пробілів на початку та кінці рядків даних.
// Для відображення рядків в редакторі VSCode знайдіть та ввімкніть опцію Editor -> Render Whitespace -> all

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

export async function task_07(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, {
      trim: true,
      columns: true,
      skip_records_with_error: true,
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
