var countdownTimer = document.getElementById("countdownTimer");
var startButton = document.getElementById("startHide");
var questionConEl = document.getElementById("questionHide");
var questionEl = document.getElementById("getQuestion");
var answersEl = document.getElementById("answerButtons");

var secondsLeft = 60;
var currentQuestion = ''
var questions = [
  {
    question: "What will the code return? Boolean(20 < 60)",
    choices: ["1. False", "2. Undefined", "3. True", "4. NaN"],
    answer: "3. True"
  },
  {
    question: "Which of the following statements will show a message as well as ask for user input in a popup?",
    choices: ["1. message()", "2. prompt()", "3. alert()", "4. confirm()"],
    answer: "2. prompt()"
  }, 
  {
    question: "What is the proper syntax of a for loop?",
    choices: ["1. for(red + blue = green)", "2. for(i++; i < 0; i = 0)", "3. for(loop)", "4. for(i = 0; i > 0; i++)"],
    answer: "4. for(i = 0; i > 0; i++)"
  },
  {
    question: "Which HTML tags do we store our JavaScript file within?",
    choices: ["1. <script></script>", "2. <header></header>", "3. <footer></footer>", "4. <img></img>"],
    answer: "1. <script></script>"
  }
];


//start button
// timer countdown ** need to figure out how to start it with start button **
// countdownTimer.addEventListener('click', startGame)
startButton.addEventListener('click', startGame)
function startGame() {
  console.log("HERE WE GOOOOOO")
  startButton.setAttribute("style", "display: none;");
  questionConEl.setAttribute("style", "display: block")
  currentQuestion = 0
  countdownTimer.textContent = secondsLeft;

  var timerSet = setInterval(function() {
    
    secondsLeft--;
    countdownTimer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerSet);
      countdownTimer.textContent = "Times up!" 
    }
  }, 1000); 

  setNextQuestion()
}


function setNextQuestion() {
  showQuestion(currentQuestion)
}

function showQuestion(questions) {
  questionEl.innerText = question.question
}

function selectAnswer() {

}


setTimer();
startGame();
setNextQuestion();
showQuestion();

    