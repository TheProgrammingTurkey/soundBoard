const information = document.getElementById('info');
const audioPlayer = document.getElementById('audioPlayer');
const cbjGoalHorn = document.getElementById('1');
const weLikePizza = document.getElementById('2');
const jeopardy = document.getElementById('3');
const win = document.getElementById('4');
const hockeySong = document.getElementById('5');
const mice = document.getElementById('6');
const nhl94 = document.getElementById('7');
const powerplay = document.getElementById('8');
const mario = document.getElementById('9');
const cartoonFall = document.getElementById('10');
const espn = document.getElementById('11');
const tnt = document.getElementById('12');
const nbc = document.getElementById('13');
const machinehead = document.getElementById('14');
const jokerAndTheThief = document.getElementById('15');
const stop = document.getElementById('16');

function showInfo() {
    information.style.display = 'block';
}

function hideInfo() {
    information.style.display = 'none';
}


cbjGoalHorn.addEventListener('click', () => {
    let num = Math.floor(Math.random()*11);
    audioPlayer.src = ["sounds/cbjGoalHorn.mp3", "sounds/bruinsGoal.mp3", "sounds/blackhawksGoal.mp3", "sounds/starsGoal.mp3", "sounds/lightningGoal.mp3", "sounds/rangersGoal.mp3", "sounds/krakenGoal.mp3", "sounds/flyersGoal.mp3", "sounds/avalancheGoal.mp3", "sounds/bluesGoal.mp3", "sounds/leafsGoal.mp3"][num];
    audioPlayer.play();
});

weLikePizza.addEventListener('click', () => {
    audioPlayer.src = "sounds/weLikePizza.mp3";
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

nhl94.addEventListener('click', () => {
    audioPlayer.src = "sounds/nhl94.mp3";
    audioPlayer.play();
});

powerplay.addEventListener('click', () => {
    audioPlayer.src = "sounds/powerplay.mp3";
    audioPlayer.play();
});

mario.addEventListener('click', () => {
    audioPlayer.src = "sounds/mario.mp3";
    audioPlayer.play();
});

cartoonFall.addEventListener('click', () => {
    audioPlayer.src = "sounds/cartoonFall.mp3";
    audioPlayer.play();
});

espn.addEventListener('click', () => {
    audioPlayer.src = "sounds/espn.mp3";
    audioPlayer.play();
});

tnt.addEventListener('click', () => {
    audioPlayer.src = "sounds/tnt.mp3";
    audioPlayer.play();
});

nbc.addEventListener('click', () => {
    audioPlayer.src = "sounds/nbc.mp3";
    audioPlayer.play();
});

machinehead.addEventListener('click', () => {
    audioPlayer.src = "sounds/machinehead.mp3";
    audioPlayer.play();
});

jokerAndTheThief.addEventListener('click', () => {
    audioPlayer.src = "sounds/jokerAndTheThief.mp3";
    audioPlayer.play();
});

stop.addEventListener('click', () => {
    audioPlayer.pause();
});