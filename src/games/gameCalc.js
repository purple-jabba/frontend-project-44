import startGame from '../index.js';
import getRandomNumber from '../utils/randomNum.js';
import calculate from '../utils/calc.js';

const description = 'What is the result of the expression?';

const gameCalc = () => {
  const getRandomSymb = () => {
    const symbols = ['+', '-', '*'];
    const symbIndex = getRandomNumber(0, symbols.length - 1);
    return symbols[symbIndex];
  };

  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const symbol = getRandomSymb();

  const question = `${numberOne} ${symbol} ${numberTwo}`;
  const answer = calculate(numberOne, numberTwo, symbol).toString();

  return [question, answer];
};

const startCalc = () => startGame(description, gameCalc);

export default startCalc;
