// Task 09

// Створіть модуль clearArray, який приймає масив (array) як аргумент і повертає новий масив, у якому залишаються лише елементи типів number та boolean.

function clearArray(array) {
  return array.filter(
    (elem) => typeof elem === 'number' || typeof elem === 'boolean'
  );
}

export default clearArray;
