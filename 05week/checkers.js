'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// attributes => A symbol this.symbol = ...
class Checker{
  constructor(symbol){
    this.symbol = symbol;
  }
}
const white = new Checker('W');
const black = new Checker('B');

// attributes => A grid layout this.grid = ...
// "In play" checkers this.checkers = ...
class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
    this.grid[20,20]= 'x'
  }
  createCheckers(white, black){
      for(let x = 0; x <= 2; x++ )
      for(let y = 0; y <= 7; y++){
        if(y % 2 === 0 ){
          this.board.grid[x][y] = white;
        }else if(y % 2 !== 0){
          this.board.grid[x][y] = white;
        }
      }
      for(let x =)
    
    // const positionBlack=(black)=>{
    //   for(let x = 7; x <= 5; x++)
    //   for(let y = 0; y <= 2; y++){
    //     if(y % 2 === 0){
    //       this.grid[x,y] = black;
    //     }else if(y % 2 !== 0){
    //       this.grid[x, y] = black;
    //     }
    //   }
    //}
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  // createCheckers(){
  //   const whitePositions = [[0,1],[0,3],[0,5],[0,7],[1,0],[1,2],[1,4],[1,6],[2,1],[2,3],[2,5],[2,7]];
  //   const blackPositions = [[5,0],[5,2],[5,4],[6,1],[6,3],[6,5],[6,7],[7,0],[7,2],[7,4],[7,6]];
  //   for(let i=0; i<12; i++){
  //     this.checkers.push(new Checker("white",whitePositions[i]));
	// 		this.checkers.push(new Checker("black",blackPositions[i]));
  //   }
  // }
  // selectChecker(row, column){

  // }
  // // killChecker(){

  // // }
}

// attributes => A game board this.board=new Board()
// methods => Starting a game


class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
  }
  createCheckers(white){
    for(let x = 0; x <= 2; x++ ){
      for(let y = 0; y <= 7; y++){
        if(y % 2 === 0 && x % 2 === 0){
          this.board.grid[x][y] = white;
        }
      }
      for(let y = 0; y <= 7; y++){
        if(y % 2 !== 0 && x === 1){
          this.board.grid[x][y] = white;
      }
    }
  }
}
}
  

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();
game.createCheckers(white);

// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
