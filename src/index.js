import readlineSync from 'readline-sync';
import greeting from './cli.js';

const gameEngine = (rule, game) => {
  const userName = greeting();

  console.log(rule);

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = game();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
