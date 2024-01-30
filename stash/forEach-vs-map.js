const numbers = [2, 3, 5, 7];

// * forEach loop
const newNumForEach = numbers.forEach((n) => {
	return n * 2;
});
console.log(newNumForEach); // undefined

const newNumbers = [];
const doubledNumbers = numbers.forEach((number) => newNumbers.push(number * 2));
console.log(newNumbers); // [ 4, 6, 10, 14 ]

// * map
const newNumMap = numbers.map((n) => {
	return n * 2;
});
console.log(newNumMap); // [ 4, 6, 10, 14 ]
