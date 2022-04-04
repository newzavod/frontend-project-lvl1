import readlineSync from 'readline-sync';
import _ from 'lodash';

const startBrainGame = () => {
  const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = 3;
  const textError = 'is wrong answer ; (.Correct answer was ';
  const textErrorLine2 = '\n Let\'s try again,';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = _.random(1, 30);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let flag = true;
    for (let n = 2; n < randomNumber; n += 1) {
      if (randomNumber % n === 0) {
        flag = false;
      }
    }
    console.log(flag);
    if (userAnswer === 'yes') {
      if (flag === true) {
        console.log('Correct!');
        // break;
      } else {
        console.log(`'${userAnswer}' ${textError}! ${flag.toString()} ${textErrorLine2} ${userName}`);
        return;
      }
    }
    if (userAnswer === 'no') {
      if (flag === false) {
        console.log('Correct!');
        // break;
      } else {
        console.log(`'${userAnswer}' ${textError}! ${flag.toString()} ${textErrorLine2} ${userName}`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName} !`);
};

export default startBrainGame;
