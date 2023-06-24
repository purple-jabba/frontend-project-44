import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const username = greeting();

export const getRandomNumber = () => Math.round(Math.random() * 100);

export const randomNumberOne = getRandomNumber();

export const randomNumberTwo = getRandomNumber();

export const ruleNotice = (rule) => console.log(rule);

export const gameLoop = (question, gameRule) => {
  console.log(`Question:${question}`);
  const answer = readlineSync.question('Answer: ');
  const correctAnswer = gameRule;
  const output = [answer, correctAnswer];
  return output;
};

export const gameCheck = () => {
  if (gameLoop[0] === gameLoop[1]) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${gameLoop[0]}" is wrong answer ;(. Correct answer was "${gameLoop[1]}".`);
  return false;
};

export const countRound = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = gameCheck();
    if (!isCorrect) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
