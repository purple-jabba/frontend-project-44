import gameEngine from '../index.js';
import getRandomNumber from '../randomNum.js';

const getRandomSymb = () => {
  const symbols = ['+', '-', '*'];
  const symbIndex = getRandomNumber(symbols.length - 1);
  return symbols[symbIndex];
};

const ruleCalc = 'What is the result of the expression?';

const gameCalc = () => {
  const numberOne = getRandomNumber(100);
  const numberTwo = getRandomNumber(100);
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

const startCalc = () => gameEngine(ruleCalc, gameCalc);

export default startCalc;
