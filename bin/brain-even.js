import { getName } from './cli.js';
import { runBrainEven } from './games/brain-even.js';
console.log('brain-even')
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log('Hello, ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(runBrainEven(userName));

