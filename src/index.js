import readlineSync from 'readline-sync';

const startBrainGame = (rulesOfGame, gameCheck) => {
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGame);
  for (let i = 0; i < rounds; i += 1) {
    const [getQuestion, correctAnswer] = gameCheck();
    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ; (.Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startBrainGame;

// каждая игра формирует данные для себя. один раунд или несколько раундов -
//  тут можно взять любой подход.
//  Главное - структура чтобы была одинаковая для всех игр.
// Тогда общий файл может быть функцией, принимающей данные игры -
//  и осуществляющей игровой процесс - приветствие, показ вопроса, запрос ответа, сравнение и тд
// и тогда каждая игра, для запуска, будет дергать общую функцию, и
// отправлять в нее свои подготовленные данные
// цикл, выводы в консоль текстов(можно из игр пробрасывать нужные, а в индексе писать их),
