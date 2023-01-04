const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

console.log(over18);

function myFunction(value, index, array) {
    return value > 18;
}
