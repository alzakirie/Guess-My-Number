'use strict';

// LECTURE: Selecting and Manipulating Elements

// // select element in HTML
// document.querySelector('.message').textContent;

// // change selected element
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// // selecting the elements with the class number and score
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // selecting the input element guess and manipulating it
// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;

// LECTURE: Handling Click Events

// Part of Lecture Implementing ...
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// selected element, added EventListener and a handler to enable event
// we did not call the function, JS does it automatically as soon as the event is excecuted

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // When there is no input
    displayMessage('🛑 Please type in a number!');

    // When player wins
  } else if (guess === number) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } // When guess is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // When players score runs 0
      displayMessage('🚽 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// LECTURE: Implementing the game logic (above)

////////////////////////////////////////////////////////////////////////////
// Coding Challenge

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK �

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

////////////////////////////////////////////////////////////////////////////
