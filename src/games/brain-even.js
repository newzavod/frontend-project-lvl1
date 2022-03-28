import readlineSync from 'readline-sync';
import _ from 'lodash';

const startBrainGame = () => {
  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = 3;
  const textErrorEvenNumber = 'is wrong answer ; (.Correct answer was \'yes\'. \n Let\'s try again,';
  const textErrorOddNumber = 'is wrong answer ; (.Correct answer was \'no\'. \n Let\'s try again,';
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = _.random(100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} ${textErrorEvenNumber} ${userName}!`);
        return;
      }
    }
    if (randomNumber % 2 !== 0) {
      if (userAnswer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${userAnswer} ${textErrorOddNumber} ${userName}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startBrainGame;
