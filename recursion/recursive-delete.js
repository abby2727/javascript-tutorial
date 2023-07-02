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
					}
				]
			},
			{
				id: 5,
				key: 5,
				code: 'ABENA-005',
				title: 'All Around Handshake',
				type: 'product',
				children: []
			}
		]
	}
];

const selectedIDs = [1, 4];

const onDeleteFunction = (data) => {
	return data.filter((item) => {
		if (selectedIDs.includes(item.id)) {
			return false;
		}
		if (item.children.length > 0) {
			const filteredChildren = onDeleteFunction(item.children);
			item.children = filteredChildren.length > 0 ? filteredChildren : [];
		}
		return true;
	});
};

console.log(onDeleteFunction(dataSource));
