import readlineSync from 'readline-sync';
import _ from 'lodash';

const startBrainGame = () => {
  const rulesOfGame = 'What is the result of the expression?.';
  const rounds = 3;
  const textError = 'is wrong answer ; (.Correct answer was . \n Let\'s try again,';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);
  for (let i = 0; i < rounds; i += 1) {
    const randomNumberFirst = _.random(10);
    const randomNumberSecond = _.random(10);
    const listOperators = ['+', '-', '*'];
    const randomOperator = listOperators[_.random(listOperators.length - 1)];
    console.log(randomOperator);
    console.log(`Question: ${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);
    // const result = randomNumberFirst + Number(randomOperator) + randomNumberSecond;
    // console.log(typeof randomNumberFirst, typeof randomNumberSecond, typeof randomOperator);
    // const result = Number(`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);
    // console.log(result);
    const userAnswer = readlineSync.question('Your answer: ');
    // console.log(typeof Number(userAnswer), userAnswer, typeof result, result);
    if (randomOperator === '+') {
      if (Number(userAnswer) === randomNumberFirst + randomNumberSecond) {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} ${textError} ${userName} !`);
        return;
      }
    }
    if (randomOperator === '-') {
      if (Number(userAnswer) === randomNumberFirst - randomNumberSecond) {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} ${textError} ${userName} !`);
        return;
      }
    }
    if (randomOperator === '*') {
      if (Number(userAnswer) === randomNumberFirst * randomNumberSecond) {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} ${textError} ${userName} !`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default startBrainGame;
