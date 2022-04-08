import _ from 'lodash';
import startBrainGame from '../index.js';

// import readlineSync from 'readline-sync';
// import _ from 'lodash';
const rulesOfGame = 'What number is missing in the progression?';

const gameCheck = () => {
  let firstElementOfProgression = _.random(1, 100);
  const stepProgression = _.random(1, 10);
  const lengthProgression = _.random(5, 10);
  const missingIndexProgression = _.random(1, (lengthProgression - 1));
  const numbersProgression = [];
  const replaceMissingElement = '..';
  for (let n = 1; n <= lengthProgression; n += 1) {
    firstElementOfProgression += stepProgression;
    numbersProgression.push(firstElementOfProgression);
  }

  const newArr = numbersProgression.splice(missingIndexProgression, 1, replaceMissingElement);
  const missingElement = newArr;
  // console.log(missingElement); // missing element
  const arrayToString = numbersProgression.toString();
  const question = (`${arrayToString}`);

  const correctAnswer = missingElement.toString();

  return [question, correctAnswer];
};

const brainProgressionGame = () => startBrainGame(rulesOfGame, gameCheck);

export default brainProgressionGame;
