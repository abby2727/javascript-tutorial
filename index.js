const values = [4, 7, 2, 4, 9, 4, 7, 7, 2, 4, 2, 7, 4];

const frequencyMap = values.reduce((map, currentValue) => {
	if (map[currentValue]) {
		map[currentValue]++;
	} else {
		map[currentValue] = 1;
	}
	return map;
}, {});

console.log(frequencyMap);

// let mostCommonElement = null;
// let maxFrequency = 0;

// for (const value in frequencyMap) {
// 	if (frequencyMap[value] > maxFrequency) {
// 		mostCommonElement = value;
// 		maxFrequency = frequencyMap[value];
// 	}
// }

// console.log(
// 	`The most common element is ${mostCommonElement}, appearing ${maxFrequency} times.`
// );
