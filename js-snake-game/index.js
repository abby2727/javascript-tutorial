const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snakeParts = [];
let tailLength = 2; // initial parts of snake

let score = 0;

let tileCount = 20;
let tileSize = 18;
let headX = 10;
let headY = 10;

let xVelocity = 0;
let yVelocity = 0;

// Snake Food
let appleX = 15;
let appleY = 5;

class snakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function changeSnakePosition() {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

// function updateGame() {

// }

function drawGame() {
    let speed = 7; // The interval will be seven times a second.

    // game over logic
    let result = isGameOver();
    
    // if result is true stop other following function from exucuting
    if (result) {
        return;
    }

    clearScreen();
    drawSnake();
    changeSnakePosition();
    checkCollision();
    drawApple();
    drawScore();

    setTimeout(drawGame, 1000 / speed); // update screen 7 times a second
}

function drawSnake() {
    // Snake color
    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

    // Snake tail color
    ctx.fillStyle = "green";
    // loop through our snakeparts array
    for (let i = 0; i < snakeParts.length; i++) {
        // draw snake parts
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }
    snakeParts.push(new snakePart(headX, headY)); // put item at the end of list next to the head
}

function drawApple() {
    ctx.fillStyle = "red"; // color of apple
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize) // position apple within tile count
}

function drawScore() {
    ctx.fillStyle = "white"; // set our text color to white
    ctx.font = "10px verdena"; // set font size to 10px of font family verdena
    ctx.fillText("Score: " + score, canvas.clientWidth - 50, 10); // position our score at right hand corner
}

function checkCollision() {
    // collision happens when left, right ,top, and bottom sides of apple is in contact with any part of the snake
    if (appleX == headX && appleY == headY) {
        appleX = Math.floor(Math.random() * tileCount); // generate apple to a random horizontal position
        appleY = Math.floor(Math.random() * tileCount); // generate apple to a random vertical position

        tailLength++; // increase tail length
        score++; // increase score value
    }
}

function clearScreen() {
    ctx.fillStyle = 'black'; // make screen black
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight); // black color start from 0px left, right to canvas width and canvas height
}

// Game Over function
function isGameOver() {
    let gameOver = false;
    // check whether game has started
    if (yVelocity === 0 && xVelocity === 0) {
        return false;
    }
    if (headX < 0) { // if snake hits left wall
        gameOver = true;
    }
    else if (headX === tileCount) { // if snake hits right wall
        gameOver = true;
    }
    else if (headY < 0) { // if snake hits wall at the top
        gameOver = true;
    }
    else if (headY === tileCount) { //if snake hits wall at the bottom
        gameOver = true;
    }

    // stop the game when snake bumps into itself

    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        if (part.x === headX && part.y === headY) { // check whether any part of snake is occupying the same space
            gameOver = true;
            break; // to break out of for loop
        }

        return gameOver; // this will stop the execution of the drawgame method
    }
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    // Move up
    if (event.keyCode == 38) {
        if (yVelocity == 1)
            return; // prevent snake from moving in opposite direction
        yVelocity = -1; // move one tile up
        xVelocity = 0;
    }

    // Move down
    if (event.keyCode == 40) {
        if (yVelocity == -1)
            return; // prevent snake from moving in opposite direction
        yVelocity = 1; // move one tile down
        xVelocity = 0;
    }

    // Move left
    if (event.keyCode == 37) {
        if (xVelocity == 1)
            return; // prevent snake from moving in opposite direction
        yVelocity = 0;
        xVelocity = -1; // move one tile left
    }

    // Move right
    if (event.keyCode == 39) {
        if (xVelocity == -1)
            return; // prevent snake from moving in opposite direcction
        yVelocity = 0;
        xVelocity = 1; // move one tile right
    }
}

drawGame();