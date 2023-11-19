'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🏆 Correct Number';

document.querySelector('.number').textContent = '14';
document.querySelector('.score').textContent = '19';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').addEventListener.
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🏆 Correct Number';
  console.log(guess);
  //when player no numbers are
  if (!guess) {
    document.querySelector('.message').textContent = '😂 No  Number! ';

    //when player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
    // document.body.style.backgroundColor = 'green';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    //when player low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You lost the game ';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    }

    //when player high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😂 You lost the game ';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
