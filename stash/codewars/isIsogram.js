function isIsogram(str) {
	const lowercaseStr = str.toLowerCase();
	const charCount = {};

	for (let i = 0; i < lowercaseStr.length; i++) {
		const char = lowercaseStr[i];
		if (charCount[char]) {
			return false;
			// charCount[char] += 1;
		} else {
			charCount[char] = 1;
		}
	}

	return true;
	// return charCount;
}

const result = isIsogram('Dermatoglyphics');
console.log(result);
