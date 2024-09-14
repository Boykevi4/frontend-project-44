import getRandomNum from '../utils/get-random-number.js';
import runGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) => (secondNum !== 0
  ? getGcd(secondNum, firstNum % secondNum)
  : firstNum);

const getQuestionAndAnswer = () => {
  const minThresholdValue = 1;
  const maxThresholdValue = 100;
  const firstNum = getRandomNum(minThresholdValue, maxThresholdValue);
  const secondNum = getRandomNum(minThresholdValue, maxThresholdValue);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getGcd(firstNum, secondNum).toString();

  return [question, correctAnswer];
};

const runGcdGame = () => runGame(gameRule, getQuestionAndAnswer);

export default runGcdGame;
