import getRandomNum from '../utils/get-random-number.js';
import runGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num === 1) {
    return false;
  }

  if (num === 2 || num === 3) {
    return true;
  }
  return num % 2 !== 0 && num % 3 !== 0;
};

const getQuestionAndAnswer = () => {
  const minThresholdValue = 0;
  const maxThresholdValue = 10;

  const numForQuestion = getRandomNum(minThresholdValue, maxThresholdValue);
  const correctAnswer = isPrimeNumber(numForQuestion) ? 'yes' : 'no';

  return [numForQuestion, correctAnswer];
};

const runPrimeGame = () => runGame(gameRule, getQuestionAndAnswer);

export default runPrimeGame;
