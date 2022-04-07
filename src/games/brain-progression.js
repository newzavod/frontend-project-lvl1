import readlineSync from 'readline-sync';
import _ from 'lodash';

const startBrainGame = () => {
  const rulesOfGame = 'What number is missing in the progression?';
  const rounds = 3;
  const textError = 'is wrong answer ; (.Correct answer was ';
  const textErrorLine2 = '\n Let\'s try again,';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);
  for (let i = 0; i < rounds; i += 1) {
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
    console.log(newArr); // missing element
    const arrayToString = numbersProgression.toString();
    console.log(`Question: ${arrayToString}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === Number(newArr)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' ${textError} '${newArr}' ${textErrorLine2} ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startBrainGame;
