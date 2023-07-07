const dataSource = [
	{
		id: 1,
		key: 1,
		code: 'ABENA-001',
		title: 'All Around Handshake',
		type: 'product',
		children: []
	},
	{
		id: 2,
		key: 2,
		code: 'Section 1',
		title: '',
		type: 'section',
		children: [
			{
				id: 3,
				key: 3,
				code: 'Subsection 1.1',
				title: '',
				type: 'subsection',
				children: [
					{
						id: 4,
						key: 4,
						code: 'ABENA-004',
						title: 'All Around Handshake',
						type: 'product',
						children: []
					},
					{
						id: 40,
						key: 40,
						code: 'ABENA-004',
						title: 'All Around Handshake',
						type: 'product',
						children: []
					}
				]
			},
			{
				id: 50,
				key: 50,
				code: 'ABENA-005',
				title: 'All Around Handshake',
				type: 'product',
				children: []
			}
		]
	},
	{
		id: 6,
		key: 6,
		code: 'ABENA-001',
		title: 'All Around Handshake',
		type: 'product',
		children: []
	}
];

// findSectionSubsectionByKeys
function findObjectById(objectArray, targetId) {
	for (let i = 0; i < objectArray.length; i++) {
		if (objectArray[i].id === targetId) {
			return objectArray[i];
		} else if (
			objectArray[i].children &&
			objectArray[i].children.length > 0
		) {
			const nestedResult = findObjectById(
				objectArray[i].children,
				targetId
			);
			if (nestedResult) {
				return nestedResult;
			}
		}
	}

	return null;
}

// getChildrenKeys
function getAllKeys(activeObject, excludeKey) {
	let keys = [];

	if (activeObject.children && activeObject.children.length > 0) {
		activeObject.children.forEach((item) => {
			keys = keys.concat(getAllKeys(item, excludeKey));
		});
	}

	if (activeObject.key !== excludeKey) {
		keys.push(activeObject.key); // Include the key after traversing children
	}

	return keys;
}

const selectedID = 2;
const activeObject = findObjectById(dataSource, selectedID);

if (activeObject) {
	const childKeys = getAllKeys(activeObject, selectedID);
	console.log(childKeys);
} else {
	console.log('Object with selectedID not found.');
}
