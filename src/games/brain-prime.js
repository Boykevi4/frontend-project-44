import { getRandomNum } from '../utils/get-random-number.js';
import runGame from '../utils/index.js';

const gameRule =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num === 1) {
    return false;
  }
  
  if (num === 2 || num === 3) {
    return true;
  } else {
    return num % 2 !== 0 && num % 3 !== 0;
  }
};

const getQuestionAndAnswer = () => {
  const numForQuestion = getRandomNum(0, 10);
  const correctAnswer = isPrimeNumber(numForQuestion) ? 'yes' : 'no';

  return [numForQuestion, correctAnswer];
};

const primeGame = () => runGame(gameRule, getQuestionAndAnswer);

export default primeGame;

