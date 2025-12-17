// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.

export default function randomSymbol(str) {
  if (str.trim() === '') return str;

  const unique = [...new Set(str)];
  const index = Math.floor(Math.random() * unique.length);
  return unique[index];
}
