import gameEngine from '../index.js';
import getRandomNumber from '../randomNum.js';

const rulePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  } if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startPrime = () => gameEngine(rulePrime, gamePrime);

export default startPrime;
