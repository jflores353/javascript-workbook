'use strict';
// Goal is to move all disks from stacks.a => stacks.c  (winning stack position)
// You can only move 1 disk at a time
// Disks size ranks from smallest to largest 1,2,3,4
// A larger size disk can NEVER sit above a smaller disk
// Move disks from A to C by using stack B as an auxiliary 

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const piece = [4, 3, 2, 1];
const stackArrA = stacks.a;
const stackArrB = stacks.b;
const stackArrC = stacks.c;
let stacksArr = Object.values(stacks);// returns stacks property values
let stacksProps = Object.keys(stacks);// returns keys as array ['a','b','c']
let stacksArrLength = stacksArr.length;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
// Only remove one piece at a time from top of any startStack
// Remove last element only
function movePiece(piece, startStack, endStack){
  // endStack.push(startStack.pop());
  // console.log('startStack => endStack');

}
// Accepts two inputs (towers) one from startStack and one from endStack
// Will return false if piece from startStack is larger than the piece on the endStack
// Only movePiece to either an empty 'stacks' or to a 'stacks' with a larger piece already present  
function isLegal(startStack, endStack) {
  if(startStack.length == 0){
    return false;
  }else if(endStack.length == 0){
    return true;
  } 
  let L1 = startStack.length-1;
  let L2 = endStack.length-1;
    if(startStack[L1] < startStack[L2]){
      return false;
    } else {
      return true;
    }
}

// All disks must be appropriately stacked at 'stacks.c' for winning position
function checkForWin() {
  if(stacksArrC == winner){
    return `You have completed the Towers of Hanoi!!!`;
    console.log('checkedForWin');
  } 
}

function towersOfHanoi(startStack, endStack) {
  const gameStart = [0, 0, 2, 0, 1, 1];
  const endStart = [2, 1, 1, 2, 0, 2];
  //for each element in start array, 
  for(let i = 0; i < startStack.length; i++){
    if (isLegal(stacksArr[gameStart[i]], stacksArr[endStart[i]])){
      movePiece(stacksArr[gameStart[i]], stacksArr[endStart[i]])
    } else (isLegal == false);
      return `Move was not legal from start to end.`
  }
}
// movePiece();
// isLegal();
// towersOfHanoi();
// checkForWin();

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
  // If input is coming from an empty startStack then should return false
  describe('#isLegal()', () => {
    it('should not allow piece to be removed from an empty stack',()=>{
      stacks = {
        a: [4,3,2,1],
        b: [],
        c: []
      };
      assert.equal(isLegal('b', 'c'), false);
    });
    // Aux middle should be allowed to hold all pieces
    it('should allow all pieces to be fully stacked on aux stack in middle', () => {
      stacks = {
        a: [],
        b: [4,3,2],
        c: [1]
      };
      assert.equal(isLegal('c', 'b'), true);
    });
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
