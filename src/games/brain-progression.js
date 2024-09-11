import { getRandomNum } from '../utils/get-random-number.js';
import runGame from '../utils/index.js';

const gameRule = 'What number is missing in the progression';

const getQuestionAndAnswer = () => {
  const firstNumForProgression = getRandomNum(6, 10);
  const arr = [];
  const progressionDelta = getRandomNum(1, 10);
  const progressionLength = getRandomNum(5, 10);

  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(firstNumForProgression + i * progressionDelta);
  }

  const correctAnswerIndex = getRandomNum(0, arr.length - 1);
  const correctAnswer = arr[correctAnswerIndex].toString();
  arr[correctAnswerIndex] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => runGame(gameRule, getQuestionAndAnswer);

export default progressionGame;

