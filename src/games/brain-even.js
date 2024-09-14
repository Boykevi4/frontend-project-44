import getRandomNum from '../utils/get-random-number.js';
import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const minThresholdValue = 1;
  const maxThresholdValue = 100;
  const question = getRandomNum(minThresholdValue, maxThresholdValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => runGame(gameRule, getQuestionAndAnswer);

export default runEvenGame;
