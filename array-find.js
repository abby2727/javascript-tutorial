const numbers = [4, 9, 19, 25, 29];
let first = numbers.find(myFunction);

// * document.getElementById("demo").innerHTML = "First number over 18 is " + first;
console.log('First number over 18 is ' + first);

function myFunction(value, index, array) {
    return value > 18;
}