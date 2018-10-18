'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Both Player 1 and Player 2 will each pick a valid object(string) to play
  //If both players enter valid object then show game result
  //If one or both players enters an invalid object to play inform user "Please choose valid play"
  //If player1 picks rock and player2 picks paper then display "Player 2 wins"
  //If player1 picks rock and player2 picks scissors then display "Player 1 wins"
  //If player1 picks paper and player2 picks rock then display "Player 2 wins"
  //If player1 picks paper and player2 picks scissors then display "Player 2 wins"
  //If player1 picks scissors and player2 picks rock then display "Player 2 wins"
  //If player1 picks scissors and player2 picks paper then display "Player 1 wins"

function rockPaperScissors(hand1, hand2) {
// Write code here 
  //If both players choose the same object to play then display "It is a draw"
  if (hand1 === hand2){
    return "It is a draw"
  } else if (hand1 === "rock" && hand2 === "scissors"){
    return "Player 1 wins!"
  } else if (hand1 === "paper" && hand2 === "rock"){
    return "Player 1 wins!"
  }else if (hand1 === "scissors" && hand2 === "paper"){
    return "Player 1 wins!"
  }else if (hand1 === "rock" && hand2 === "paper"){
    return "Player 2 wins!"
  }else if (hand1 === "paper" && hand2 === "scissors"){
    return "Player 2 wins!"
  }else if (hand1 === "scissors" && hand2 == "rock"){
    return "Player 2 wins!"
  };
}

rockPaperScissors();

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( (answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
