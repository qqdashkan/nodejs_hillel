export default (str) => {
  const arr = str.trim().split('');
  if (arr.every((char) => char === ' ')) return true;
  return arr.every((char) => char === char.toLowerCase()) ? true : false;
};
