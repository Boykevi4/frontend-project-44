import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
console.log('brain-calc');
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log('Hello, ' + userName + '!');
console.log('What is the result of the expression?');
const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};
const operatorIndex = randomNum(0, 2);
const arr = ['-', '+', '*'];

const runQuestion = () => {
  for (let i = 0; i < 3; i++) {
    const firstNum = randomNum(1, 20);
    const secondNum = randomNum(1, 20);
    console.log('Question:' + firstNum + arr[operatorIndex] + secondNum);
    let result = 0;
    if (operatorIndex === 0) {
      result = firstNum - secondNum;
    } else if (operatorIndex === 1) {
      result = firstNum + secondNum;
    } else {
      result = firstNum * secondNum;
    }

    const userAnswer = readlineSync.question('Your answer:');
    if (result === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`
      );
      console.log("Let's try again, " + userName + '!');

      return;
    }
  }
  console.log('Congratulations, ' + userName + '!');
};
console.log(runQuestion());

