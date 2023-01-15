const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8]
console.log(typeof numbers);

// Arrow function
const numbers2 = [1, 2, 3, 4];
const doubledNumbers2 = numbers.map(number => number * 3);
console.log(doubledNumbers2);