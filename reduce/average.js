const testScores = [85, 92, 78, 90, 88];

const sum = testScores.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
console.log(sum / testScores.length);
