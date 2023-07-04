import startGame from '../index.js';
import getRandomNumber from '../utils/randomNum.js';

const description = 'What number is missing in the progression?';

const getRandomProgression = (startPoint, step, length) => {
  const result = [];
  let temp;

  result.push(startPoint);

  for (let i = 0; i <= length - 1; i += 1) {
    temp = result[i] + step;
    result.push(temp);
  }
  return result;
};

const gameProg = () => {
  const firstNum = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(4, 9);

  const generatedProgression = getRandomProgression(firstNum, progressionStep, progressionLength);
  const selectedIndex = getRandomNumber(0, generatedProgression.length - 1);
  const answer = generatedProgression[selectedIndex].toString();

  generatedProgression[selectedIndex] = '..';
  const question = generatedProgression.join(' ');

  return [question, answer];
};

const startProg = () => startGame(description, gameProg);

export default startProg;
