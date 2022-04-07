import readlineSync from 'readline-sync';
import _ from 'lodash';

const startBrainGame = () => {
  const rulesOfGame = 'Find the greatest common divisor of given numbers.';
  const rounds = 3;
  const textError = 'is wrong answer ; (.Correct answer was ';
  const textErrorLine2 = '\n Let\'s try again,';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);
  for (let i = 0; i < rounds; i += 1) {
    let randomNumberFirst = _.random(1, 10);
    let randomNumberSecond = _.random(1, 10);
    console.log(`Question: ${randomNumberFirst} ${randomNumberSecond}`);
    const userAnswer = readlineSync.question('Your answer: ');

    while (randomNumberFirst !== randomNumberSecond) {
      if (randomNumberFirst > randomNumberSecond) {
        randomNumberFirst -= randomNumberSecond;
      } else {
        randomNumberSecond -= randomNumberFirst;
      }
    }
    if (Number(userAnswer) === randomNumberFirst) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' ${textError} '${randomNumberFirst}' ${textErrorLine2} ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startBrainGame;
