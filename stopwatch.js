let timer = document.getElementById('timer');
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let intervalId;
let seconds = 0;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        timer.textContent = formatTime(seconds);
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    timer.textContent = '00:00:00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondsDisplay = seconds % 60;
    return ${padZero(hours)}:${padZero(minutes)}:${padZero(secondsDisplay)};
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}