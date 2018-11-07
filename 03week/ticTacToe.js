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

const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const isPlayerTurn = (val) => {
  return val === playerTurn;
}

const horizontalWin = () => {
  if(board[0].every(isPlayerTurn) || board[1].every(isPlayerTurn) || board[2].every(isPlayerTurn)){
    console.log(`${playerTurn} wins!`)
    return true;
  }
}


const verticalWin = () => {
  if(board[0][0] && board[1][0] && board[2][0] == playerTurn  ||board[0][1] && board[1][1] && board[2][1] == playerTurn || board[0][2] && board[1][2] && board[2][2] == playerTurn){
    console.log(`${playerTurn} wins!`)
    return true;
  }
}

const diagonalWin = () => {
  if(board[0][0] && board[1][1] && board[2][2] == playerTurn || board[0][2] && board[1][1] && board[2][0] == playerTurn){
    console.log(`${playerTurn} wins!`)
    return true;
  }
}

const checkForWin = () => {
  return horizontalWin() || verticalWin() || diagonalWin()  
};

const isValidMove = (row, column) => {
  return board[row][column] === ' '
};

const switchPlayer = () => {
  if(playerTurn == 'X'){
    playerTurn = 'O'
  } else {
    playerTurn = 'X'
  }
};

// const resetBoard = () => {
//   board[0].splice(0, 3);
//   board[1].splice(0, 3);
//   board[2].splice(0, 3);
// }

const ticTacToe = (row, column) => {
  if(isValidMove(row, column)){
    board[row][column] = playerTurn;
  } if (!checkForWin()){
    switchPlayer()
  }
};


const getPrompt = () => {
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
