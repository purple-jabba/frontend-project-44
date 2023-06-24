import readlineSync from 'readline-sync';
import greeting from './cli.js';

const gameEngine = (rule, game) => {
  const userName = greeting();

  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = game();

    console.log(rule);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
