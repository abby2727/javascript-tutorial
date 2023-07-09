function recursiveSummation(inputNumber) {
	if (inputNumber <= 1) {
		return inputNumber;
	}

	return inputNumber + recursiveSummation(inputNumber - 1);
}

console.log(recursiveSummation(3));
