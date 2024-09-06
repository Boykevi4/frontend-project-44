import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
console.log('brain-prime');
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const isPrimeNumber = (num) => {
  if (num === 2 || num === 3) {
    return true;
  } else {
    return num % 2 !== 0 && num % 3 !== 0;
  }
};

const runPrime = () => {
  for (let i = 0; i < 3; i++) {
    const numForExamination = randomNum(1, 10);
    readlineSync.question('Question:' + numForExamination);
    const userAnswer = readlineSync.question('Your answer:');
    const correctAnswer = isPrimeNumber(numForExamination) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
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
console.log(runPrime());

