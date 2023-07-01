import startGame from '../index.js';
import getRandomNumber from '../utils/randomNum.js';

const ruleCalc = 'What is the result of the expression?';

const getRandomSymb = () => {
  const symbols = ['+', '-', '*'];
  const symbIndex = getRandomNumber(0, symbols.length - 1);
  return symbols[symbIndex];
};

const gameCalc = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const symbol = getRandomSymb();

  let calc = symbol;
  switch (calc) {
    case '+':
      calc = numberOne + numberTwo;
      break;
    case '-':
      calc = numberOne - numberTwo;
      break;
    case '*':
      calc = numberOne * numberTwo;
      break;
    default:
  }

  const question = `${numberOne} ${symbol} ${numberTwo}`;
  const answer = calc.toString();

  return [question, answer];
};

const startCalc = () => startGame(ruleCalc, gameCalc);

export default startCalc;
