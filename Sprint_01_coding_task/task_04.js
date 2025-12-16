// Task 04

// Створіть іменований модуль prepareString, який отримує рядок, видаляє пробіли на початку та в кінці, переводить текст у нижній регістр і робить першу літеру великою.
// Модуль повинен повертати опрацьований рядок.

// Ці дії дуже корисні під час обробки інформації перед збереженням у базу даних,
// наприклад, під час збереження імен. Подумайте, які додаткові вимоги ви б додали до цього завдання в реальному проєкті.

export default function prepareString(str) {
  let res = str.trim().toLowerCase();
  const firstUpperCaseLetter = res.charAt(0).toUpperCase();
  res = res.replace(res.charAt(0), firstUpperCaseLetter);
  return res;
}
