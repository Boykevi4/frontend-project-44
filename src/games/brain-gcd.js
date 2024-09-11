import { getRandomNum } from '../utils/get-random-number.js';
import runGame from '../utils/index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNum, secondNum) =>
  secondNum !== 0 ? getGcd(secondNum, firstNum % secondNum) : firstNum;

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = firstNum + ' ' + secondNum;
  const correctAnswer = getGcd(firstNum, secondNum).toString();

  return [question, correctAnswer];
};

const gcdGame = () => runGame(gameRule, getQuestionAndAnswer);

export default gcdGame;

