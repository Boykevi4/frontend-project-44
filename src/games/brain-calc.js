import { getRandomNum } from '../utils/get-random-number.js';
import runGame from '../utils/index.js';

const gameRule = 'What is the result of the expression?';

const operators = ['-', '+', '*'];

const operatorIndex = getRandomNum(0, 2);

const calculate = (firstNum, secondNum, operatorIndex) => {
  if (operatorIndex === '-') {
    return firstNum - secondNum;
  } else if (operatorIndex === '+') {
    return firstNum + secondNum;
  } else {
    return firstNum * secondNum;
  }
};

const getQuestionAndAnswer = () => {
  const operator = operators[operatorIndex];
  const firstNum = getRandomNum(0, 100);
  const secondNum = getRandomNum(0, 100);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = calculate(firstNum, secondNum, operator).toString();

  return [question, correctAnswer];
};

const calcGame = () => runGame(gameRule, getQuestionAndAnswer);

export default calcGame;

