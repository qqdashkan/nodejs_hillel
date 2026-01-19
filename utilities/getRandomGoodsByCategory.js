export function getRandomGoodsByCategory(array, count, category) {
  try {
    const items = array.filter((elem) => elem.category === category);
    return Array.from(
      { length: count },
      () => items[Math.floor(Math.random() * items.length)],
    );
  } catch (error) {
    console.error(error);
    return Array(count).fill(null);
  }
}
