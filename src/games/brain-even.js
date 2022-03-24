import readlineSync from 'readline-sync';
import _ from 'lodash';

const startBrainGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = _.random(100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (randomNumber % 2 === 0 && userAnswer === 'yes') {
    console.log('Corect!');
  }
  if (randomNumber % 2 !== 0 && userAnswer === 'no') {
    console.log('Corect!');
  }
  if (randomNumber % 2 === 0 && userAnswer === 'no') {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${userName}!`);
  }
  if (randomNumber % 2 !== 0 && userAnswer === 'yes') {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}!`);
  }
};
export default startBrainGame;
