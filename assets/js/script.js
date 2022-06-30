// creating variables via dot.notation
var countdownTimer = document.getElementById("countdownTimer");
var startButton = document.getElementById("startHide");
var questionConEl = document.getElementById("questionHide");
var questionEl = document.getElementById("getQuestion");
var answersEl = document.getElementById("answerButtons");
var scoreStore = document.getElementById("scoreStore");
var quesTitle = document.getElementById("quesTitle");
var formSubmit = document.getElementById("form");
var scoreCard = document.getElementById("card");

// variables
var secondsLeft = 30;
var index = 0;
var correctAnswer = 0;

// set of questions and answers for the quiz
var questions = [
  {
    question: "What will the code return? Boolean(20 < 60)",
    choices: ["1. False", "2. Undefined", "3. True",],
    answer: "3. True"
  },
  {
    question: "Which of the following statements will show a message as well as ask for user input in a popup?",
    choices: ["1. message()", "2. prompt()", "3. alert()",],
    answer: "2. prompt()"
  },
  {
    question: "What is the proper syntax of a for loop?",
    choices: ["1. for(red + blue = green)", "2. for(i = 0; i > 0; i++)", "3. for(loop)"],
    answer: "2. for(i = 0; i > 0; i++)"
  },
  {
    question: "Which HTML tags do we store our JavaScript file within?",
    choices: ["1. <script></script>", "2. <header></header>", "3. <footer></footer>",],
    answer: "1. <script></script>"
  }
];


// start button click
// triggers timer countdown, hides start button, displays question & answer container
startButton.addEventListener('click', startGame)
function startGame() {
  console.log("HERE WE GOOOOOO")
  startButton.setAttribute("style", "display: none;");
  questionConEl.setAttribute("style", "display: flex")

  countdownTimer.textContent = secondsLeft;


  var timerSet = setInterval(function () {

    secondsLeft--;
    countdownTimer.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerSet);
      countdownTimer.textContent = "Times up!"
      gameOver();
    }
  }, 1000);


  nextQuestion();
}

function nextQuestion() {
  var questionPopulate = questions[index];
  quesTitle.textContent = questionPopulate.question;
  answersEl.innerHTML = '';
  questionPopulate.choices.forEach(function (choice) {
    var buttonPopulate = document.createElement('button');
    buttonPopulate.setAttribute('value', choice);
    buttonPopulate.textContent = choice; //got check act to set class and value
    answersEl.append(buttonPopulate); // adds the elements to the parent ChoiceEl
    buttonPopulate.classList.add("button"); // applies  class='answer' styling
    console.log(buttonPopulate);
    buttonPopulate.addEventListener("click", selectAnswer);
  })
}


// alerts user if right or wrong question was selected and gives time penalty 
function selectAnswer() {
  var clickedOption = event.target.textContent;
  var correctOption = questions[index].answer;
  if (clickedOption === correctOption) {
    correctAnswer++;
    scoreStore.textContent = "Score: " + correctAnswer;
    console.log(correctAnswer)
    index++;
    // alert("Good Job")
    nextQuestion();
  } else {
    secondsLeft -= 5;
    countdownTimer.textContent = secondsLeft;
    // alert("incorrect! You lose 5 seconds!");
    index++
    nextQuestion();
  }
}

function gameOver() {
  questionConEl.setAttribute("style", "display: none;");
  startButton.setAttribute("style", "display: none;");
  formSubmit.setAttribute("style", "display: flex;");
  scoreCard.setAttribute("style", "display: flex;");
}