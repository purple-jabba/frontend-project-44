import gameEngine from '../index.js';
import getRandomNumber from '../randomNum.js';

const ruleProg = 'What number is missing in the progression?';

const getRandomArray = () => {
  const result = [];
  let temp;

  const firstNum = getRandomNumber(1, 50);
  const progStep = getRandomNumber(1, 10);
  const progLength = getRandomNumber(4, 9);

  result.push(firstNum);

  for (let i = 0; i < progLength; i += 1) {
    temp = result[i] + progStep;
    result.push(temp);
  }
  return result;
};

const gameProg = () => {
  let hiddenNumber = '';

  const generatedArr = getRandomArray();
  const selectedIndex = getRandomNumber(0, generatedArr.length - 1);

  for (let i = 0; i <= generatedArr.length - 1; i += 1) {
    if (i === selectedIndex) {
      hiddenNumber = `${hiddenNumber}.. `;
    } else {
      hiddenNumber = `${hiddenNumber}${generatedArr[i]} `;
    }
  }
  const question = hiddenNumber;
  const answer = generatedArr[selectedIndex].toString();

  return [question, answer];
};

const startProg = () => gameEngine(ruleProg, gameProg);

export default startProg;
