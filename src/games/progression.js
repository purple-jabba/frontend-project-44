import startGame from '../index.js';
import getRandomNumber from '../utils/randomNum.js';
import arrayToString from '../utils/arrToStr.js';

const description = 'What number is missing in the progression?';

const gameProg = () => {
  const getRandomProg = (startPoint, step, length) => {
    const result = [];
    let temp;

    result.push(startPoint);

    for (let i = 0; i <= length - 1; i += 1) {
      temp = result[i] + step;
      result.push(temp);
    }
    return result;
  };

  const firstNum = getRandomNumber(1, 50);
  const progStep = getRandomNumber(1, 10);
  const progLength = getRandomNumber(4, 9);

  const generatedProg = getRandomProg(firstNum, progStep, progLength);
  const selectedIndex = getRandomNumber(0, generatedProg.length - 1);
  const hiddenIndex = [];
  hiddenIndex.push(...generatedProg);
  hiddenIndex[selectedIndex] = '..';

  const question = arrayToString(hiddenIndex);
  const answer = generatedProg[selectedIndex].toString();

  return [question, answer];
};

const startProg = () => startGame(description, gameProg);

export default startProg;
