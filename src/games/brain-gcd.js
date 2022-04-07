import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const gameCheck = () => {
  let randomNumberFirst = _.random(1, 100);
  let randomNumberSecond = _.random(1, 100);
  const question = (`${randomNumberFirst} ${randomNumberSecond}`);

  const correctAnswer = () => {
    while (randomNumberFirst !== randomNumberSecond) {
      if (randomNumberFirst > randomNumberSecond) {
        randomNumberFirst -= randomNumberSecond;
      } else {
        randomNumberSecond -= randomNumberFirst;
      }
    }
    return [randomNumberFirst];
  };
  return [question, correctAnswer().toString()];
};

const brainGcdGame = () => startBrainGame(rulesOfGame, gameCheck);

export default brainGcdGame;
