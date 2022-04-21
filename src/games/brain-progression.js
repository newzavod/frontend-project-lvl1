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
  const progression = getProgression(firstElementOfProgression, stepProgression, lengthProgression);
  const missingIndexProgression = _.random(1, (progression.length - 1));

  const answer = String(progression[missingIndexProgression]);
  progression[missingIndexProgression] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const brainProgressionGame = () => startBrainGame(rulesOfGame, generateRound);

export default brainProgressionGame;
