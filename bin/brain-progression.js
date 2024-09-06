import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
console.log('brain-progression');
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log('Hello, ' + userName + '!');
console.log('What number is missing in the progression');

const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const runProgression = () => {
  for (let i = 0; i < 3; i++) {
    const firstNumForProgression = randomNum(6, 10);
    const arr = [];
    const progressionDelta = randomNum(1, 10);
    const progressionLength = randomNum(5, 10);

    for (let i = 0; i < progressionLength; i += 1) {
      arr.push(firstNumForProgression + i * progressionDelta);
    }

    const correctAnswerIndex = randomNum(0, arr.length - 1);
    const correctAnswer = arr[correctAnswerIndex];
    arr[correctAnswerIndex] = '..';
    console.log('Question:' + arr.join(' '));
    const userAnswer = readlineSync.question('Your answer:');
    if (correctAnswer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log("Let's try again, " + userName + '!');

      return;
    }
  }
  console.log('Congratulations, ' + userName + '!');
};
console.log(runProgression());

