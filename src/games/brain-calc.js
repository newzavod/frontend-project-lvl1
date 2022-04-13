import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What is the result of the expression?.';
const listOperators = ['+', '-', '*'];

const generateRound = () => {
  const randomNumberFirst = _.random(1, 100);
  const randomNumberSecond = _.random(1, 100);
  // const listOperators = ['+', '-', '*'];
  const randomOperator = listOperators[_.random(listOperators.length - 1)];
  const question = (`${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`);
  const sum = (randomNumberFirst + randomNumberSecond);
  const sub = (randomNumberFirst - randomNumberSecond);
  const mult = (randomNumberFirst * randomNumberSecond);
  const correctAnswer = () => {
    if (randomOperator === '+') {
      return sum;
    }
    if (randomOperator === '-') {
      return sub;
    }
    if (randomOperator === '*') {
      return mult;
    }
    return [sum, sub, mult];
  };
  return [question, correctAnswer().toString()];
};

const brainCalcGame = () => startBrainGame(rulesOfGame, generateRound);

export default brainCalcGame;
