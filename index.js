const ourStorage = {
	desk: {
		drawer: 'stapler'
	},
	cabinet: {
		top: {
			folder1: 'a file',
			folder2: 'secrets'
		},
		'bottom drawer': 'soda'
	}
};

console.log(ourStorage['cabinet'].top.folder2);
