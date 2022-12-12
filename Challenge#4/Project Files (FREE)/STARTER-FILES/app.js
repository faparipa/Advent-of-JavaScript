const keys = [..."1234567890wABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
    return keys[getRandomNumber(0, keys.length - 1)];
}

function targetRandomKey() {
    const key = document.querySelector(`[data-key="${getRandomKey()}"]`);
    //console.log("key: " + `[data-key="${getRandomKey()}"]`);
    key.classList.add("jiggle");
    let start = Date.now();
}

function getTimestamp() {
    return Math.floor(Date.now() / 1000);
}

document.addEventListener("keyup", (event) => {
    const keyPressed = String.fromCharCode(event.keyCode);
    const keyElement = document.querySelector(`[data-key="${keyPressed}"]`);
    const highlightedKey = document.querySelector(".jiggle");
    keyElement.classList.add("hit");
    keyElement.addEventListener("animationend", () => {
        keyElement.classList.remove("hit");
    });

    if (keyPressed === highlightedKey.innerHTML) {
        timestamps.unshift(getTimestamp());
        const elapsedTime = timestamps[0] - timestamps[1];
        console.log(`Character per minute ${60 / elapsedTime}`);
        highlightedKey.classList.remove("jiggle");
        targetRandomKey();
    }
});

targetRandomKey();
