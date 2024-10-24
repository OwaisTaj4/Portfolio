let startStopButton = document.getElementById("startStop");
let resetButton = document.getElementById("reset");
let timerDisplay = document.getElementById("timer");

let running = false;
let interval;
let hours = 0, minutes = 0, seconds = 0;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    
    timerDisplay.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

startStopButton.addEventListener("click", function () {
    if (!running) {
        interval = setInterval(updateTimer, 90);
        startStopButton.textContent = "Stop";
        running = true;
    } else {
        clearInterval(interval);
        startStopButton.textContent = "Start";
        running = false;
    }
});

resetButton.addEventListener("click", function () {
    clearInterval(interval);
    running = false;
    startStopButton.textContent = "Start";
    hours = 0;
    minutes = 0;
    seconds = 0;
    timerDisplay.textContent = "00:00:00";
});
