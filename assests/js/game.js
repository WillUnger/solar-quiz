
const questions = document.getElementById('question');




              
          

      








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





//questions
let questions = [
  {
    numb: 1,
    question : "1. Which one of these is NOT a moon of Jupiter?",
    options : ["A. Calisto", "B. Io", "C. Europa", "D. Miranda"],
    answer : "D. Miranda"
  },
  {
    numb: 2,
    question : "2. Which planet has the coolest atmosphere?",
    options : ["A. Saturn", "B. Uranus", "C. Neptune", "D. Pluto"],
    answer : "B. Uranus"
  },
  {
    numb: 3,
    question : "3. Which one of these planets rotates on its side?",
    options : ["A. Saturn", "B. Uranus", "C. Neptune", "D. Jupiter"],
    answer : "B. Uranus"
  }, 
  {
    numb: 4,
    question : "4. At the Sun’s Core, Nuclear Fusion converts Hydrogen to ________",
    options : ["A. Plutonium", "B. Helium", "C. Potassium", "D. Radium"],
    answer : "B. Helium"
  }, 
  {
    numb: 5,
    question : "5. The nearest star to our Solar System is?",
    options : ["A. Epsilon Indi", "B. Proxima Centauri", "C. Sirius", "D. DX Cancri"],
    answer : "B. Proxima Centauri"
  },  
]

//get questions and options from array//

function displayQuestion() {
    const questionText = document.getElementById("question");
    let questionTag = '<h2>'+ questions[0].question +'</h2>';
    questionText.innerHTML = questionTag;
    const optionText = document.getElementsByClassName("choice-btn");
    let optionTag = <div id = "choiceA"><button>+ questions[index].options[0] +</button></div>
                  + <div id = "choiceB"><button>+ questions[index].options[1] +</button></div>
                  + <div id = "choiceC"><button>+ questions[index].options[2] +</button></div>
                  + <div id = "choiceD"><button>+ questions[index].options[3] +</button></div>
    optionText.innerHTML = optionTag;
}