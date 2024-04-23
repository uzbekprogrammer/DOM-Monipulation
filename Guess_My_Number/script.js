'use strict';

// Define the shorthand function
const dq = selector => document.querySelector(selector);

// Use it to select the first element with the class 'message'

// // document.querySelector('.message');
// console.log(
//   "🚀 ~ document.querySelector('.message');:",
//   document.querySelector('.message').textContent
// );

// document.querySelector('.message').textContent = '🥳Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
console.log(secretNumber);
// console.log(dq('.message').textContent);

dq('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Right answer!';
    dq('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    } else {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '📉 Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      }
      //   dq('.number').textContent = guess;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
