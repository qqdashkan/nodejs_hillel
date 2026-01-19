export function getCategories(data) {
  const categories = new Set(data.map((elem) => elem.category));
  return Array.from(categories);
}
