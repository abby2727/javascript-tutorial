function longest(s1, s2) {
	const concatStr = s1.concat(s2);
	const strArr = concatStr.split('');
	let newArr = [];

	for (s in strArr) {
		const char = strArr[s];
		if (!newArr.includes(char)) {
			newArr.push(char);
		}
	}

	return newArr.sort().join('');
}

console.log(longest('abc', 'cefda')); // abcdef
