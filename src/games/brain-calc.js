import readlineSync from 'readline-sync';
import _ from 'lodash';

const startBrainGame = () => {
  const rulesOfGame = 'What is the result of the expression?.';
  const rounds = 3;
  const textError = 'is wrong answer ; (.Correct answer was ';
  const textErrorLine2 = '\n Let\'s try again,';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);
  for (let i = 0; i < rounds; i += 1) {
    const randomNumberFirst = _.random(1, 100);
    const randomNumberSecond = _.random(1, 100);
    const listOperators = ['+', '-', '*'];
    const randomOperator = listOperators[_.random(listOperators.length - 1)];
    console.log(`Question: ${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomOperator === '+') {
      const resultSum = randomNumberFirst + randomNumberSecond;
      if (Number(userAnswer) === resultSum) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' ${textError} '${resultSum}'! ${textErrorLine2} ${userName}`);
        return;
      }
    }
    if (randomOperator === '-') {
      const resultSub = randomNumberFirst - randomNumberSecond;
      if (Number(userAnswer) === resultSub) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' ${textError} '${resultSub}'! ${textErrorLine2} ${userName}`);
        return;
      }
    }
    if (randomOperator === '*') {
      const resultMult = randomNumberFirst * randomNumberSecond;
      if (Number(userAnswer) === resultMult) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' ${textError} '${resultMult}'! ${textErrorLine2} ${userName}`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default startBrainGame;
