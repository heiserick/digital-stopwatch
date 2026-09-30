let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function formatTime(time) {
    let milliseconds = Math.floor((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);

    return (
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + ":" +
        String(milliseconds).padStart(2, '0')
    );
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('display').textContent = formatTime(elapsedTime);
        }, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    document.getElementById('display').textContent = "00:00:00";
}
