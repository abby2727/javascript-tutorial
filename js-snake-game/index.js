const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

function updateGame() {

}

function drawGame() {
    let speed = 7; //The interval will be seven times a second.

    setTimeout(drawGame, 1000 / speed); //update screen 7 times a second

    clearScreen();
    drawSnake();
}

function drawSnake() {
    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

}

function clearScreen() {
    ctx.fillStyle = 'black'; // make screen black
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); // black color start from 0px left, right to canvas width and canvas height
}

drawGame();