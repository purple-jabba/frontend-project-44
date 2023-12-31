import startGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return getGcd(m, k);
  }
  return n;
};

const generateRound = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);

  const question = `${numberOne} ${numberTwo}`;
  const answer = getGcd(numberOne, numberTwo).toString();
  return [question, answer];
};

const startGsd = () => startGame(description, generateRound);

export default startGsd;
