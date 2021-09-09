// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded"), function() {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        } else {
            let gameQuiz = this.getAttribute("data-type");
            runGame(gameQuiz);
        }
    });
}
}

const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('choice--btn'));
const scores = getElementsByClassName('scores');

let currentQuestion = {}
let answer = true
let score = 0
let availableQuestions = []


//Array of questions, options and answers//
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

const max_score = 5
const max_questions = 5



//The game loads the first question straight away 
//And starts as soon as the user answers 







