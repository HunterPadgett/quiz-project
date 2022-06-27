
var countdownTimer = document.getElementById("countdownTimer");

var secondsLeft = 60;

function setTimer() {
  var timerSet = setInterval(function() {

    secondsLeft--;
    countdownTimer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerSet);
      
    }
  }, 1000); 
}

setTimer();


    