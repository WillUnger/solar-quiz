


/**
* The main game "loop", called when the script is first loaded
* and after the user's answer has been processed
*/
function runGame(gameType) {}


/**
* Checks the answer against the first element in
* the returned calculateCorrectAnswer array
*/
function checkAnswer() {}


/**
* Gets the operands (the numbers) and the operator (plus, minus etc)
* directly from the dom, and returns the correct answer.
*/
function calculateCorrectAnswer() {}


/**
* Gets the current score from the DOM and increments it by 1
*/
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
  
  }
  
  /**
  * Gets the current tally of incorrect answers from the DOM and increments it by 1
  */
  function incrementWrongAnswer() {
  
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
  }


  const questions = []