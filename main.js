const audioPlayer = document.getElementById('audioPlayer');
const cbjGoalHorn = document.getElementById('1');
const weLikePizza = document.getElementById('2');
const bitOutside = document.getElementById('3');
const birds = document.getElementById('4');
const jeopardy = document.getElementById('5');
const win = document.getElementById('6');
const hockeySong = document.getElementById('7');
const mice = document.getElementById('8');
const nhl94 = document.getElementById('9');
const powerplay = document.getElementById('10');
const mario = document.getElementById('11');
const cartoonFall = document.getElementById('12');
const espn = document.getElementById('13');
const tnt = document.getElementById('14');
const nbc = document.getElementById('15');
const stop = document.getElementById('16');


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


stop.addEventListener('click', () => {
    audioPlayer.pause();
});
