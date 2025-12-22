// Task 09

// Напишіть модуль який отримує аргумент рядок даних і повертає масив об'єктів. Перший рядок - рядок заголовків.

import { parse } from 'csv-parse/sync';

export function task_09(data) {
  try {
    const result = parse(data, {
      columns: true,
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
