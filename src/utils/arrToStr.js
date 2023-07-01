const arrayToString = (array) => {
  let text = '';
  for (let i = 0; i <= array.length - 1; i += 1) {
    text = `${text} ${array[i]}`;
  }
  return text.trim();
};

export default arrayToString;
