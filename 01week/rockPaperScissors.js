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


  function rockPaperScissors(handOne, handTwo) {
// Write code here 
  //If both players choose the same object to play then display "It is a draw"
      let hand1 = handOne.toLowerCase();
      let hand2 = handTwo.toLowerCase(); 
      if (hand1 !== "rock" && hand1 !== "paper" && hand1 !=="scissors" || hand2 !== "rock" && hand2 !== "paper" && hand2 !== "scissors"){

        console.log("Please choose rock, paper or scissors");
        getPrompt();
      }
   
      else if (hand1 === "rock" && hand2 === "scissors"){
        console.log( "Rock wins. Player one is victorious!");
      }
      else if (hand1 === "paper" && hand2 === "rock"){
        console.log( "Paper wins. Player one is the winner!");
          } 
      else if (hand1 === "scissors" && hand2 === "paper"){
        console.log( "Scissors win. Player one is the best!");
              }
      else if (hand2 === "rock" && hand1 === "scissors"){
         console.log( "Rock wins. Player two is victorious!");
                  } 
      else if (hand2 === "paper" && hand1 === "rock"){
        console.log( "Paper wins. Player two is the winner!");
                      } 
      else if (hand2 === "scissors" && hand1 === "paper"){
        console.log( "Scissors win. Player two is the best!");
                          }
      else {
        console.log( "It is a draw");
      }
}
    

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      rockPaperScissors (answer1, answer2);
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
