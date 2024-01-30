function switchSample(num) {
	switch (num) {
		case 5:
			return 'hello';
		case 6:
			return 'world';
		default:
			return 'bye';
	}
}

console.log(switchSample(5));

// * Note: When a return statement is encountered,
// * the function execution immediately exits.
