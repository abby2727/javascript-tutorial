// const numbers = [5, 10, 15];
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value, index, array) {
//     return total + value;
// }

const numbers = [5, 10, 15, 5];
console.log(numbers.length);
// let sum = numbers.reduceRight(myFunction);
let sum = numbers.reduce(myFunction);

console.log(sum);

function myFunction(total, value) {
    return total + value;
    // return total;
}