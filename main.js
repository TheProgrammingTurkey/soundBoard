const audioPlayer = document.getElementById('audioPlayer');
const cbjGoalHorn = document.getElementById('1');
const weLikePizza = document.getElementById('2');
const bitOutside = document.getElementById('3');
const birds = document.getElementById('4');
const jeopardy = document.getElementById('5');
const win = document.getElementById('6');


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