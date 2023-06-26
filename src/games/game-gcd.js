import gameEngine from '../index.js';
import getRandomNumber from '../randomNum.js';

const ruleGsd = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return gcd(m, k);
  }
  return n;
};

const gameGcd = () => {
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);

  const question = `${numberOne} ${numberTwo}`;
  const answer = gcd(numberOne, numberTwo).toString();
  return [question, answer];
};

const startGsd = () => gameEngine(ruleGsd, gameGcd);

export default startGsd;
