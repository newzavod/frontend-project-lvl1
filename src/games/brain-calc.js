import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What is the result of the expression?';
const listOperators = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
      throw new Error(`Unsupported operator - ${operator}`);
  }
};

const generateRound = () => {
  const randomNumberFirst = _.random(1, 100);
  const randomNumberSecond = _.random(1, 100);
  const randomOperator = listOperators[_.random(listOperators.length - 1)];
  const question = (`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);

  const correctAnswer = String(calc(randomNumberFirst, randomNumberSecond, randomOperator));
  console.log(correctAnswer);
  return [question, correctAnswer];
};

const brainCalcGame = () => startBrainGame(rulesOfGame, generateRound);

export default brainCalcGame;
