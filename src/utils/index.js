import readlineSync from 'readline-sync';

import makeGreetings from './cli.js';

const numberOfRounds = 3;

const runGame = (gameRule, getQuestionAndAnswer) => {
  const userName = makeGreetings();
  console.log(gameRule);

  for (let round = 0; round < numberOfRounds; round++) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      console.log(`Let's try again ${userName}`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;

