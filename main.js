const audioPlayer = document.getElementById('audioPlayer');
const cbjGoalHorn = document.getElementById('1');
const weLikePizza = document.getElementById('2');
const bitOutside = document.getElementById('3');
const birds = document.getElementById('4');
const jeopardy = document.getElementById('5');
const win = document.getElementById('6');
const hockeySong = document.getElementById('7');
const mice = document.getElementById('8');
const stop = document.getElementById('9');


cbjGoalHorn.addEventListener('click', () => {
    audioPlayer.src = "sounds/cbjGoalHorn.mp3";
    audioPlayer.play();
});

weLikePizza.addEventListener('click', () => {
    audioPlayer.src = "sounds/weLikePizza.mp3";
    audioPlayer.play();
});

bitOutside.addEventListener('click', () => {
    audioPlayer.src = "sounds/bitOutside.mp3";
    audioPlayer.play();
});

birds.addEventListener('click', () => {
    audioPlayer.src = "sounds/birds.mp3";
    audioPlayer.play();
});

jeopardy.addEventListener('click', () => {
    audioPlayer.src = "sounds/jeopardy.mp3";
    audioPlayer.play();
});

win.addEventListener('click', () => {
    audioPlayer.src = "sounds/win.mp3";
    audioPlayer.play();
});

hockeySong.addEventListener('click', () => {
    audioPlayer.src = "sounds/hockeySong.mp3";
    audioPlayer.play();
});

mice.addEventListener('click', () => {
    audioPlayer.src = "sounds/mice.mp3";
    audioPlayer.play();
});

stop.addEventListener('click', () => {
    audioPlayer.pause();
});