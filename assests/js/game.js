//Array of questions, options and answers//
let questionList = [
  { 
    question : "1. Which one of these is NOT a moon of Jupiter?",
    options : ["A. Calisto", "B. Io", "C. Europa", "D. Miranda"],
    correctAnswer : "D. Miranda"
  },
  {  
    question : "2. Which planet has the coolest atmosphere?",
    options : ["A. Saturn", "B. Uranus", "C. Neptune", "D. Pluto"],
    correctAnswer : "B. Uranus"
  },
  { 
    question : "3. Which one of these planets rotates on its side?",
    options : ["A. Saturn", "B. Uranus", "C. Neptune", "D. Jupiter"],
    correctAnswer : "B. Uranus"
  }, 
  { 
    question : "4. At the Sun’s Core, Nuclear Fusion converts Hydrogen to ________",
    options : ["A. Plutonium", "B. Helium", "C. Potassium", "D. Radium"],
    correctAnswer : "B. Helium"
  }, 
  {
    question : "5. The nearest star to our Solar System is?",
    options : ["A. Epsilon Indi", "B. Proxima Centauri", "C. Sirius", "D. DX Cancri"],
    correctAnswer : "B. Proxima Centauri"
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

//  Welcome Message and Start Button //

 function displayWelcomeMessage() {
   let username = document.getElementById('username-input').value;
   document.getElementById('intro-message').textContent = "Welcome " + username + ", to the Solar System Quiz!";
 }

// startGame Function //

function startGame() {
  score = 0
  currentQuestion = 0
  getQuestions();
  checkAnswer();
  remainingQuestions = questionList.length;
}

// checkAnswer Function //

function checkAnswer() {
  answers.forEach(answer => {
    answer.addEventListener('click', event => {
      let selection = event.target.innerText;
      if (selection === questionList[currentQuestion].correctAnswer) {
        score++;
      }

      document.getElementById("running-score").innerHTML = "Current Score <br>" + score + "/5";
      getQuestions();
      remainingQuestions--;
      document.getElementById('remaining-questions').innerHTML = "Questions remaining <br>" + remainingQuestions + "/5";
      let username = document.getElementById("username-input").value;
            document.getElementById("final-score").innerHTML = username + ", you scored " + score + " out of " + questionList.length;
    });
  });
}

// getQuestions Function //

function getQuestions() {
  currentQuestion = currentQuestion + 1;
  if (currentQuestion >= questionList.length) {
    showHide('final-score-div');
        showHide('question-div');
        showHide('quiz-div');    
  }
}

/** Assigning Questions to each option div */
document.getElementById("quiz-questions").innerHTML = questionList[currentQuestion].question;
    document.getElementById("button-a").innerHTML = questionList[currentQuestion].options[0];
    document.getElementById("button-b").innerHTML = questionList[currentQuestion].options[1];
    document.getElementById("button-c").innerHTML = questionList[currentQuestion].options[2];
    document.getElementById("button-d").innerHTML = questionList[currentQuestion].options[3];

function visitPage() {
  window.location.href = "#header";
}




