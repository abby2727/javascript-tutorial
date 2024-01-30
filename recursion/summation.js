function recursiveSummation(num) {
	if (num <= 1) return num;
	return num + recursiveSummation(num - 1);
}

console.log(recursiveSummation(3)); // 6
