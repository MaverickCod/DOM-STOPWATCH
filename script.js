let timer;
let running = false;
let time = 0;
let lapCount = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById("startStop").innerHTML = "Start";
    } else {
        timer = setInterval(updateDisplay, 10); // Update every 10 milliseconds
        document.getElementById("startStop").innerHTML = "Stop";
    }
    running = !running;
}

function lap() {
    if (running) {
        lapCount++;
        let lapTime = getTimeString();
        let lapItem = document.createElement("li");
        lapItem.innerHTML = "Lap " + lapCount + ": " + lapTime;
        document.getElementById("laps").appendChild(lapItem);
        document.getElementById("lapContainer").style.display = "block";
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    time = 0;
    lapCount = 0;
    document.getElementById("display").innerHTML = "00:00:00.000";
    document.getElementById("startStop").innerHTML = "Start";
    document.getElementById("laps").innerHTML = "";
    document.getElementById("lapContainer").style.display = "none";
}

function updateDisplay() {
    time++;
    document.getElementById("display").innerHTML = getTimeString();
}

function getTimeString() {
    let hours = Math.floor(time / 360000);
    let minutes = Math.floor((time % 360000) / 6000);
    let seconds = Math.floor((time % 6000) / 100);
    let milliseconds = time % 100;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
