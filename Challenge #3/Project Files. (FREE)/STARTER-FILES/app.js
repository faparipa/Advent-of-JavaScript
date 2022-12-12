const keys = document.querySelectorAll("a");
const keyAudio = [
    "key-1.mp3",
    "key-2.mp3",
    "key-3.mp3",
    "key-4.mp3",
    "key-5.mp3",
    "key-6.mp3",
    "key-7.mp3",
    "key-8.mp3",
    "key-9.mp3",
    "key-10.mp3",
    "key-11.mp3",
    "key-12.mp3",
    "key-13.mp3",
    "key-14.mp3",
    "key-15.mp3",
    "key-16.mp3",
    "key-17.mp3",
    "key-18.mp3",
    "key-19.mp3",
    "key-20.mp3",
    "key-21.mp3",
    "key-22.mp3",
    "key-23.mp3",
];

for (let i = 0; i < keys.length; i++) {
    const audio = document.createElement("audio");
    audio.className = "audio";
    audio.src = `./audio/${keyAudio[i]}`;
    document.body.appendChild(audio);
}

keys.forEach((item, index) => {
    const audioEl = document.querySelectorAll("audio");
    item.addEventListener("click", () => {
        audioEl[index].play();
    });
});
