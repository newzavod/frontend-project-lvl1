import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  } return 'yes';
};

const generateRound = () => {
  const randomNumber = _.random(1, 100);
  const question = `${randomNumber}`;

  const correctAnswer = String(isPrime(randomNumber));
  return [question, correctAnswer];
};

const brainPrimeGame = () => startBrainGame(rulesOfGame, generateRound);

export default brainPrimeGame;
