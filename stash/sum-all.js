const numbers = [2, 3, 5, 7];
let sum = 0;

// numbers.forEach((n) => (sum += n));
numbers.map((n) => (sum += n));

console.log(sum);
