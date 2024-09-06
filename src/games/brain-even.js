import readlineSync from 'readline-sync';

const randomNum = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const isEven = (num) => num % 2 === 0 ? 'yeiugibikbs' : 'njhvjhvbhjo';

export const runBrainEven = (userName) => {
  for (let i = 0; i < 3; i++) {
    const randomNumber = randomNum(1, 1000);
    readlineSync.question('Question:' + randomNumber);
    const userAnswer = readlineSync.question('Your answer:');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log("Let's try again, " + userName + '!');

      return;
    }
  }
  console.log('Congratulations, ' + userName + '!');
};

