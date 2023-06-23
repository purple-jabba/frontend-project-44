#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const startRound = () => {
  const getRandomNumber = () => Math.round(Math.random() * 100);

  const isEven = (num) => num % 2 === 0;

  const randomNumber = getRandomNumber();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question:${randomNumber}`);
  const answer = readlineSync.question('Answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

const startGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

startGame();
