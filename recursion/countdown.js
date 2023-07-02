function countdown(n) {
	// Base case: stop the recursion when n reaches 0
	if (n === 0) {
		console.log('Done!');
		return;
	}

	// Recursive case: call the function with n-1 and print the current value of n
	console.log(n);
	countdown(n - 1);
}

countdown(5);
