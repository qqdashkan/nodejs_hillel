// Task 05

// Створіть іменований модуль randomSymbol, який отримує рядок і повертає випадковий символ з цього рядка.
// Якщо передано порожній рядок — повертає порожній рядок.

export default function randomSymbol(str) {
  const arr = str.trim().split('');
  if (arr.every((char) => char === ' ')) return str;

  const unique = [...new Set(arr)];
  const index = Math.floor(Math.random() * unique.length);
  return unique[index];
}
