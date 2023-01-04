const numbers = [5, 10, 15, 5];
// console.log(numbers.length);
// let sum = numbers.reduceRight(myFunction);
let sum = numbers.reduce(myFunction);

console.log(sum);

function myFunction(total, value) {
    // return total;
    return total + value;
}