// * cloning to prevent mutation.
let numList = [1, 2, 3];
let numListClone = [...numList]; // [1, 2, 3]

// * spread operator for destructuring.
let animal = {
	name: 'dog',
	color: 'brown',
	age: 7
};
let { age, ...otherProperties } = animal;

// * spread operator as rest operator
function sum(x, y, ...rest) {
	let total = x + y;
	for (let num of rest) {
		total += num;
	}
	return total;
}

console.log(sum(1, 2)); // Output: 3 (no rest arguments)
console.log(sum(1, 2, 3)); // Output: 6 (rest arguments: [3])
console.log(sum(1, 2, 3, 4)); // Output: 10 (rest arguments: [3, 4])
console.log(sum(1, 2, 3, 4, 5)); // Output: 15 (rest arguments: [3, 4, 5])

return false;

// * spread operator for merging arrays or objects
let numLists = [...numList1, ...numList2];
