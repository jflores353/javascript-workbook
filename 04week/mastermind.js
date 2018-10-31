'use strict';
// User enters a guess (input)
// => match user guess to a soltution, format guess (lowerCase, trim)
// Guess has to be valid , vailid means in letters array, length of 4, cant be empty

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

// user enters guess, guess has to be valid,
const isValid = (guess) =>{
  //if valid return true and pushEntryToBoard
  // else return invalid guess and tell user 'Must be in letters array
}

const checkForWin = () =>{
  // if true and guess matches solution return 'You guessed the solution' , show solution
  // reset board
  // else check for turns
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint() {
  // your code here
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if(ifValid(guess)){
    board.push(guess)
    if(checkForWin(guess)){
      //tell the user
      resetTheBoard();
    }
  }else if(hasGuessesRemaining()){

    //tell the user why not valid
    resetTheBoard();
  }else{
    showHints();
  }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
