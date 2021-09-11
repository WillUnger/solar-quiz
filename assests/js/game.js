//Array of questions, options and answers//
let questionList = [
  { 
    question : "1. Which one of these is NOT a moon of Jupiter?",
    options : ["A. Calisto", "B. Io", "C. Europa", "D. Miranda"],
    answer : "D. Miranda"
  },
  {  
    question : "2. Which planet has the coolest atmosphere?",
    options : ["A. Saturn", "B. Uranus", "C. Neptune", "D. Pluto"],
    answer : "B. Uranus"
  },
  { 
    question : "3. Which one of these planets rotates on its side?",
    options : ["A. Saturn", "B. Uranus", "C. Neptune", "D. Jupiter"],
    answer : "B. Uranus"
  }, 
  { 
    question : "4. At the Sun’s Core, Nuclear Fusion converts Hydrogen to ________",
    options : ["A. Plutonium", "B. Helium", "C. Potassium", "D. Radium"],
    answer : "B. Helium"
  }, 
  {
    question : "5. The nearest star to our Solar System is?",
    options : ["A. Epsilon Indi", "B. Proxima Centauri", "C. Sirius", "D. DX Cancri"],
    answer : "B. Proxima Centauri"
  },  
];

let currentQuestion;
let remainingQuestions;
let score;
let answers = Array.from(document.getElementsByClassName("answer"));

//Opening page DOM - focus on user-input

window.addEventListener('DOMEventLoaded',(event) => {
  let submitButton = document.getElementById('username-submit');
  if (submitButton.style.display = 'none');
  submitButton.style.display = 'block';
});

document.getElementById('username-input').focus();

//Hide and Show Sections//
function showHide(target) {
  let targetContainer = document.getElementById(target);
  if (targetContainer.style.display === "none") {
      targetContainer.style.display = "block";
  } else {
      targetContainer.style.display = "none";
  }
}


document.getElementById('username-input').addEventListener('keybown', function (event) {
  if (event.key === "Enter") {
      displayMessage();
      showHide('intro-div');
      showHide('username-div');
  }
});

// function to display Welcome Message and Start Button //

 function displayWelcomeMessage() {
   let username = document.getElementById('username-input').value;
   document.getElementById('intro-message').textContent = "Welcome " + username + ", to the Solar System Quiz!";
 }

 







