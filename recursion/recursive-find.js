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

function findSectionSubsectionByKeys(dataSource, targetKey) {
	const dataSourceLength = dataSource.length;

	for (let i = 0; i < dataSourceLength; i++) {
		if (dataSource[i].key === targetKey) {
			return dataSource[i];
		} else if (
			dataSource[i].children &&
			dataSource[i].children.length > 0
		) {
			const nestedResult = findSectionSubsectionByKeys(
				dataSource[i].children,
				targetKey
			);
			if (nestedResult) {
				return nestedResult;
			}
		}
	}

	return null;
}

function getChildrenKeys(activeObject, excludeKey) {
	let keys = [];

	if (activeObject.children && activeObject.children.length > 0) {
		activeObject.children.forEach((item) => {
			keys = keys.concat(getChildrenKeys(item, excludeKey));
		});
	}

	if (activeObject.key !== excludeKey) {
		keys.push(activeObject.key);
	}

	return keys;
}

const selectedKey = 3;
const parentObject = findSectionSubsectionByKeys(dataSource, selectedKey);

const childKeys = getChildrenKeys(parentObject, selectedKey);
console.log(childKeys);
