const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

let xVelocity = 0;
let yVelocity = 0;

function changeSnakePosition() {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function updateGame() {

}

function drawGame() {
    let speed = 7; //The interval will be seven times a second.

    setTimeout(drawGame, 1000 / speed); //update screen 7 times a second

    clearScreen();
    drawSnake();
    changeSnakePosition();
}

function drawSnake() {
    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function clearScreen() {
    ctx.fillStyle = 'black'; // make screen black
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); // black color start from 0px left, right to canvas width and canvas height
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    //up
    if (event.keyCode == 38) {
        if (yVelocity == 1)
            return; //prevent snake from moving in opposite direction
        yVelocity = -1; //move one tile up
        xVelocity = 0;
    }

    //down
    if (event.keyCode == 40) {
        if (yVelocity == -1)
            return;//prevent snake from moving in opposite direction
        yVelocity = 1;//move one tile down
        xVelocity = 0;
    }

    //left
    if (event.keyCode == 37) {
        if (xVelocity == 1)
            return;//prevent snake from moving in opposite direction
        yVelocity = 0;
        xVelocity = -1;//move one tile left
    }

    //right
    if (event.keyCode == 39) {
        if (xVelocity == -1)
            return;//prevent snake from moving in opposite direcction
        yVelocity = 0;
        xVelocity = 1;//move one tile right
    }
}

drawGame();