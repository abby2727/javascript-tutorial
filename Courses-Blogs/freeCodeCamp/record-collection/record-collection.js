const recordCollection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name']
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette']
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: []
	},
	5439: {
		albumTitle: 'ABBA Gold'
	}
};

function updateRecords(records, id, prop, value) {
	const recordToUpdate = records[id];

	if (prop === 'tracks') {
		if (!recordToUpdate.hasOwnProperty(prop)) recordToUpdate[prop] = [];
		recordToUpdate[prop].push(value);
	} else {
		recordToUpdate[prop] = value;
	}

	if (value === '') delete recordToUpdate[prop];
	// if (Object.keys(recordToUpdate).length <= 0) delete records[id];
	return records;
}

console.log(updateRecords(recordCollection, 5439, 'albumTitle', ''));
