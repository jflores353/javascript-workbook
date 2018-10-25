'use strict';
// Evaluate if Player 1 enters valid 'x' or 'o' in an empty location. Only one play allowed.
// Update the board. Check for win.
// Then alert Player 2 for next play.
// Evaluate if Player 2 enters valid 'x' or 'o' in an empty location.
// Update the board. Check for win.
// To check for win evaluate if any array has true values horizontally, verically, or diagonally, else
// if board has no remaining empty locations then return 'It's a draw'

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const player1 = 'X';
const player2 = 'Y';
const horizontalWin0 = board[0]
const horizontalWin1 = board[1]
const horizontalWin2 = board[2]
const verticalWin0 = [board[0][0] , board[1][0] , board[2][0]];
const verticalWin1 = [board[0][1] , board[1][1] , board[2][1]];
const verticalWin2 = [board[0][2] , board[1][2] , board[2][2]];
const diagonalWin1 = [board[0][0] , board[1][1] , board[2][2]];
const diagonalWin2 = [board[0][2] , board[1][1] , board[2][0]];

const ifValidPlay = () =>{
  let playerTurn = player1;
  if(player1 !== 'x'){
    return `Please enter a 'x' to play`;
  }
    else{
      board.splice()
    }
    if(player2 !== 'y'){
      return `Please enter a 'y' to play`;
    } 
    else{
      board.splice();
    }
}

function horizontalWin() {
  // Your code here
  if(player1 == horizontalWin0 || horizontalWin1 || horizontalWin2){
    return 'Player 1 is the winner with the horizontal set!!!'
  }else if
    (player2 == horizontalWin0 || horizontalWin1 || horizontalWin2){
      return 'Player 2 is the winner with the horizontal set!!!'
    };
}


function verticalWin() {
  // Your code here
  if(player1 == verticalWin0 || verticalWin1 || verticalWin2){
    return `Player 1 is the champ with the vertical win!!!`
  }else if
    (player2 == verticalWin0 || verticalWin1 || verticalWin2){
      return `Player 2 is the champ with the verical win!!!`
    };
}

function diagonalWin() {
  // Your code here
  if(player1 == diagonalWin1 || diagonalWin2){
    return `Player 1 wins with the diagonal X's!!!`
  }else if
    (player2 == diagonalWin1 || diagonalWin2){
      return `Player 2 wins with the diagonal Y's!!!`
    };
}

function checkForWin() {
  // Your code here
  horizontalWin();
  verticalWin();
  diagonalWin();
}

function ticTacToe(row, column) {
  // Your code here
    if(player1 == ifValidPlay){
      checkForWin()
    } else if
      (player2 == ifValidPlay){
        checkForWin()
      };
    
  } 


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
