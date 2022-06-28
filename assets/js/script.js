var countdownTimer = document.getElementById("countdownTimer");
var startButton = document.getElementById("startHide");
var questionConEl = document.getElementById("questionHide");
var questionEl = document.getElementById("getQuestion");
var answersEl = document.getElementById("answerButtons");

var secondsLeft = 60;
var currentQuestion = ''


//start button
// timer countdown ** need to figure out how to start it with start button **
// countdownTimer.addEventListener('click', startGame)
startButton.addEventListener('click', startGame)
function startGame() {
  console.log("HERE WE GOOOOOO")
  startButton.setAttribute("style", "display: none;");
  currentQuestion = 0
  countdownTimer.textContent = secondsLeft;

  var timerSet = setInterval(function() {
    
    secondsLeft--;
    countdownTimer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerSet);
      
    }
  }, 1000); 
  setNextQuestion()
}

  setNextQuestion()


function setNextQuestion() {
  showQuestion(currentQuestion)
}

function showQuestion(questions) {
  questionEl.innerText = question.question
}

function selectAnswer() {

}



var questions = [
  {
    question: "What will the code return? Boolean(20 < 60)",
    answers: [
      {text: "False", correct: false},
      {text: "Undefined", correct: false},
      {text: "True", correct: true},
      {text: "NaN", correct: false}
    ] 
  }

  
  // {
  //   question: "Which of the following statements will show a message as well as ask for user input in a popup?",
  //   answers: ["message()", "prompt()", "alert()", "confirm()"],
  //   answer: 2
  // },
    
  // {
  //   question: "What is the proper syntax of a for loop?",
  //   answers: ["for(red + blue = green)", "for(i++; i < 0; i = 0)", "for(loop)", "for(i = 0; i > 0; i++)"],
  //   answer: 4
  // },
  // {
  //   question: "Which HTML tags do we store our JavaScript file within?",
  //   answers: ["<script></script>", "<header></header>", "<footer></footer>", "<img></img>"],
  //   answer: 1
  // }
]



setTimer();
startGame();
setNextQuestion();
showQuestion();

    