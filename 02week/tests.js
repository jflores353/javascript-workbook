// Tests

if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
      it(`should scrub input to ensure only valid play of either:'rock', 'paper' or 'scissors' is played`, () => {
        assert.equal(rockPaperScissors(''), "Please play either rock, paper or scissors.");
      });
      it('should scrub input to ensure lowercase with "trim"ed whitespace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      });
      it('should detect when hand one wins', () => {
        assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
        assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      });
      it('should detect when hand two wins', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
        assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
        assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      });
      it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
        assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
        assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
      });
      it('should detect if one object has been played and not any additional', () => {
        assert.equal(rockPaperScissors('rock paper'), "Only play one item");
      });
    });
  } else {
  
    getPrompt();
  
  }
  