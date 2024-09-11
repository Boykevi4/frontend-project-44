import { getRandomNum } from '../utils/get-random-number.js';
import runGame from '../utils/index.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNum(1, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const evenGame = () => runGame(gameRule, getQuestionAndAnswer);

export default evenGame;

