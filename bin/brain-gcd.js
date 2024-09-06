import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
console.log('brain-gcd');
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log('Hello, ' + userName + '!');
console.log('Find the greatest common divisor of given numbers.');

const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const gcd = (firstNum, secondNum) =>
  secondNum !== 0 ? gcd(secondNum, firstNum % secondNum) : firstNum;

const runBrainGcd = () => {
  for (let i = 0; i < 3; i++) {
    const firstNum = randomNum(1, 100);
    const secondNum = randomNum(1, 100);

    console.log('Question:' + firstNum + ' ' + secondNum);

    const currentAnswer = gcd(firstNum, secondNum);
    const userAnswer = readlineSync.question('Your answer:');

    if (currentAnswer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.`
      );
      console.log("Let's try again, " + userName + '!');

      return;
    }
  }
  console.log('Congratulations, ' + userName + '!');
};

console.log(runBrainGcd());

