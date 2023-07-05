import startGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);

  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const selectedOperator = operators[operatorIndex];

  const question = `${numberOne} ${selectedOperator} ${numberTwo}`;
  const answer = calculate(numberOne, numberTwo, selectedOperator).toString();

  return [question, answer];
};

const startCalc = () => startGame(description, generateRound);

export default startCalc;
