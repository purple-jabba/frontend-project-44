import gameEngine from '../index.js';

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

const ruleEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEven = () => gameEngine(ruleEven, gameEven);

export default startEven;
