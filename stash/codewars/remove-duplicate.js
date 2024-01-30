const result = [];
const inputArray = [1, 2, 1, 1, 3, 2];

inputArray.forEach((item) => {
	if (!result.includes(item)) {
		result.push(item);
	}
});

console.log(result);
