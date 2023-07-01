import startGame from '../index.js';
import getRandomNumber from '../utils/randomNum.js';

const ruleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => startGame(ruleEven, gameEven);

export default startEven;
