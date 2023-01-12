const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snakeParts = [];
let tailLength = 2; //initial parts of snake

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
    let speed = 7; //The interval will be seven times a second.

    setTimeout(drawGame, 1000 / speed); //update screen 7 times a second

    clearScreen();
    drawSnake();
    changeSnakePosition();
    checkCollision();
    drawApple();
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
    snakeParts.push(new snakePart(headX, headY)); //put item at the end of list next to the head
}

function drawApple() {
    ctx.fillStyle = "red"; // color of apple
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize) //position apple within tile count
}

function checkCollision() {
    //collision happens when left, right ,top, and bottom sides of apple is in contact with any part of the snake
    if (appleX == headX && appleY == headY) {
        appleX = Math.floor(Math.random() * tileCount); //generate apple to a random horizontal position
        appleY = Math.floor(Math.random() * tileCount); //generate apple to a random vertical position
        tailLength++;
    }
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
            return; //prevent snake from moving in opposite direction
        yVelocity = 1; //move one tile down
        xVelocity = 0;
    }

    //left
    if (event.keyCode == 37) {
        if (xVelocity == 1)
            return; //prevent snake from moving in opposite direction
        yVelocity = 0;
        xVelocity = -1; //move one tile left
    }

    //right
    if (event.keyCode == 39) {
        if (xVelocity == -1)
            return; //prevent snake from moving in opposite direcction
        yVelocity = 0;
        xVelocity = 1; //move one tile right
    }
}

drawGame();