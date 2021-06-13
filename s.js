const DAY = document.getElementById("days");
const HR = document.getElementById("hours");
const MIN = document.getElementById("mins");
const SEC = document.getElementById("seconds");

const goaldate = "3 July 2021";

function countdown() {
    const newgoaldate = new Date(goaldate);
    const currentDate = new Date();

    const totalSeconds = (newgoaldate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    DAY.innerHTML = days;
    HR.innerHTML = formatTime(hours);
    MIN.innerHTML = formatTime(mins);
    SEC.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);
