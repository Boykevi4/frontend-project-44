import getRandomNum from '../utils/get-random-number.js';
import runGame from '../index.js';

const gameRule = 'What is the result of the expression?';

const operators = ['-', '+', '*'];

const produceCalculate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error('Unsupported operation');
  }
};

const getQuestionAndAnswer = () => {
  const minThresholdValue = 0;
  const maxThresholdValue = 100;

  const operator = operators[getRandomNum(minThresholdValue, operators.length - 1)];
  const firstNum = getRandomNum(minThresholdValue, maxThresholdValue);
  const secondNum = getRandomNum(minThresholdValue, maxThresholdValue);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = produceCalculate(firstNum, secondNum, operator).toString();

  return [question, correctAnswer];
};

const runCalcGame = () => runGame(gameRule, getQuestionAndAnswer);

export default runCalcGame;
