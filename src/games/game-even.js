import gameEngine from '../index.js';
import getRandomNumber from '../randomNum.js';

const isEven = (num) => num % 2 === 0;

const ruleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const question = getRandomNumber(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => gameEngine(ruleEven, gameEven);

export default startEven;
