import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What is the result of the expression?.';
const listOperators = ['+', '-', '*'];

// const correctAnswer = (num1, operator, num2) => {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     default:
//       return `Unsupported operator - ${operator}`;
//   }
// };
// console.log(correctAnswer(42, '+', 42)); → 84

const generateRound = () => {
  const randomNumberFirst = _.random(1, 100);
  const randomNumberSecond = _.random(1, 100);
  const randomOperator = listOperators[_.random(listOperators.length - 1)];
  const question = (`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);

  // correctAnswer(randomNumberFirst, randomOperator, randomNumberSecond);

  const correctAnswer = () => {
    if (randomOperator === '+') {
      return (randomNumberFirst + randomNumberSecond);
    }
    if (randomOperator === '-') {
      return (randomNumberFirst - randomNumberSecond);
    }
    if (randomOperator === '*') {
      return (randomNumberFirst * randomNumberSecond);
    }
    return correctAnswer;
  };

  return [question, correctAnswer().toString()];
};

const brainCalcGame = () => startBrainGame(rulesOfGame, generateRound);

export default brainCalcGame;
