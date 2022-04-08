import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameCheck = () => {
  const randomNumber = _.random(1, 30);
  const question = `${randomNumber}`;

  const correctAnswer = () => {
    let flag = 'yes';
    for (let n = 2; n < randomNumber; n += 1) {
      if (randomNumber % n === 0) {
        flag = 'no';
      }
    }
    if (flag === 'yes') {
      return flag;
    }
    if (flag === 'no') {
      return flag;
    }
    return flag;
  };
  return [question, correctAnswer()];
};

const brainPrimeGame = () => startBrainGame(rulesOfGame, gameCheck);

export default brainPrimeGame;
