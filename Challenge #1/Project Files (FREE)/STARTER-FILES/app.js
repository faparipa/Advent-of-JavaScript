const minuteInput = document.querySelector(".minutes > input");
const secondInput = document.querySelector(".seconds > input");
const startBtn = document.querySelector(".start");
const settingsBtn = document.querySelector(".settings");
const ring = document.querySelector(".ring");

const second = 1000;
const minute = second * 60;
let countdownActive;
let distance;
let audio = document.createElement("audio");
audio.src = "./sound/alarm.wav";

//console.log(countdownValue);

let isInterval = false;

let updateDOM = () => {
    countdownActive = setInterval(() => {
        let countdownValue =
            minuteInput.value * minute + secondInput.value * second;
        isInterval = true;
        distance = countdownValue -= second;
        const minutes = Math.floor(distance / minute);
        const seconds = Math.floor((distance % minute) / second);
        //console.log(minutes, seconds);
        //If the contdown has enden,show complete
        if (distance < 1) {
            ring.classList.add("ending");
            audio.play();
        }

        if (distance < 0) {
            clearInterval(countdownActive);
            alert("Times Up!");
            audio.pause();
        } else {
            //Else show the coundown in progress
            if (minutes < 10) {
                minuteInput.value = `0${minutes}`;
            } else {
                minuteInput.value = `${minutes}`;
            }
            if (seconds < 10) {
                secondInput.value = `0${seconds}`;
            } else {
                secondInput.value = `${seconds}`;
            }
        }
    }, second);
};

let satrtStopContdown = () => {
    if (isInterval == false) {
        startBtn.textContent = "Pause";
        minuteInput.disabled = true;
        secondInput.disabled = true;
        ring.classList.remove("ending");
        updateDOM();
    } else {
        setTimeInput();
    }
};

let setTimeInput = () => {
    startBtn.textContent = "Play";
    minuteInput.disabled = false;
    secondInput.disabled = false;
    clearInterval(countdownActive);
    isInterval = false;
};

startBtn.addEventListener("click", satrtStopContdown);
settingsBtn.addEventListener("click", setTimeInput);
