import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  } return getGcd(number2 % number1, number1);
};

const generateRound = () => {
  const randomNumberFirst = _.random(1, 100);
  const randomNumberSecond = _.random(1, 100);
  const question = (`${randomNumberFirst} ${randomNumberSecond}`);

  const correctAnswer = String(getGcd(randomNumberFirst, randomNumberSecond));

  return [question, correctAnswer];
};

const brainGcdGame = () => startBrainGame(rulesOfGame, generateRound);

export default brainGcdGame;
