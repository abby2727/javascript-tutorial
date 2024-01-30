function factorial(n) {
	// base case
	if (n === 1) return 1;

	// recursive case
	return n * factorial(n - 1);
}

const result = factorial(6);
console.log(result); // Output: 720
