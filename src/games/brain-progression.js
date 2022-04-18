import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getProgression = (startProgression, step, length) => {
  const arithmeticProgression = [];
  let start = startProgression;

  for (let n = 1; n <= length; n += 1) {
    start += step;
    arithmeticProgression.push(start);
  }
  return arithmeticProgression;
};

const generateRound = () => {
  const firstElementOfProgression = _.random(1, 100);
  const stepProgression = _.random(1, 10);
  const lengthProgression = _.random(5, 10);
  const result = getProgression(firstElementOfProgression, stepProgression, lengthProgression);
  const replaceMissingElement = '..';

  const missingIndexProgression = _.random(1, (result.length - 1));
  const newArr = result.splice(missingIndexProgression, 1, replaceMissingElement);
  const missingElement = newArr;
  const arrayToString = result.join(' ');
  const question = (`${arrayToString}`);
  const correctAnswer = missingElement.toString();
  return [question, correctAnswer];
};

const brainProgressionGame = () => startBrainGame(rulesOfGame, generateRound);

export default brainProgressionGame;
