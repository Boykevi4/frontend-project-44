import getRandomNum from '../utils/get-random-number.js';
import runGame from '../index.js';

const gameRule = 'What number is missing in the progression';

const produceProgression = (firstNum, length) => {
  const progression = [];
  const minValueForStep = 1;
  const maxValueForStep = 6;
  const step = getRandomNum(minValueForStep, maxValueForStep);

  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + step * i);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(0, 100);
  const progressionLength = getRandomNum(5, 11);

  const progression = produceProgression(firstNum, progressionLength);
  const correctAnswerIndex = getRandomNum(0, progression.length - 1);
  const correctAnswer = progression[correctAnswerIndex].toString();
  progression[correctAnswerIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(gameRule, getQuestionAndAnswer);

export default runProgressionGame;
