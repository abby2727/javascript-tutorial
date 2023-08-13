const testScores = [85, 100, 100];

const sum = testScores.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
console.log(sum);
