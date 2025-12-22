// Task 01

import { readFile } from 'fs/promises';
import { parse } from 'csv-parse/sync';

// Напишіть модуль який отримує аргумент - шлях до файлу files/sci_fi_1.csv і повертає масив об'єктів виду.
// В цьому CSV файлів не буде помилок.
// Оскільки ми відпрацьовуємо роботу с пакетом csv-parse то перевіряти існування файла - не треба.
// Тобто файл існує, не пустий.
// Приклад виклику - написаний у app.js

// В налаштуваннях csv-parse тут і в інших тасках використовуйте МІНІМАЛЬНИЙ набір параметрів

// [
//     {Title : Neon AudioWorklet, Year: 1981..}
//     ...
// ]

export async function task_01(pathToFile) {
  try {
    const data = await readFile(pathToFile, 'utf8');
    const result = parse(data, {});
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
