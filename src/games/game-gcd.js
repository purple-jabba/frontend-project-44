import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const ruleGsd = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return gcd(m, k);
  }
  return n;
};

const gameGcd = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();

  const question = `${numberOne} ${numberTwo}`;
  const answer = gcd(numberOne, numberTwo).toString();
  return [question, answer];
};

const startGsd = () => startGame(ruleGsd, gameGcd);

export default startGsd;
