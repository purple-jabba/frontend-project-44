import * as brain from '../index.js';

const evenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionEven = brain.randomNumberOne;

const isEven = (num) => num % 2 === 0;

const evenCheck = isEven(brain.randomNumberOne) ? 'yes' : 'no';

const startEven = () => {
  brain.greeting();

  brain.ruleNotice(evenRule);

  brain.gameLoop(questionEven, evenCheck);

  brain.gameCheck();

  brain.countRound();
};

export default startEven;
