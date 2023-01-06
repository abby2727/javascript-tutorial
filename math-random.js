// return random number between 0 and 9

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// return random number between 1 and 10
function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRndInteger2(0, 10));