const productData = [
	{
		key: '1',
		index: 1,
		id: 1,
		productCode: 'ABENA-001',
		version: 'Version 101',
		productName: 'All Around Handsake'
	},
	{
		key: '2',
		index: 2,
		id: 2,
		productCode: 'ABENA-001',
		version: 'Version 101',
		productName: 'All Around Handsake'
	},
	{
		key: '3',
		index: 3,
		id: 3,
		productCode: 'Section 01',
		version: '',
		productName: '',
		children: [
			{
				key: '3a',
				index: 50,
				id: 50,
				productCode: 'ABENA-001',
				version: 'Version 101',
				productName: 'All Around Handsake'
			},
			{
				key: '3b',
				index: 51,
				id: 51,
				productCode: 'ABENA-001',
				version: 'Version 101',
				productName: 'All Around Handsake'
			},
			{
				key: '3c',
				index: 52,
				id: 52,
				productCode: 'ABENA-001',
				version: 'Version 101',
				productName: 'All Around Handsake'
			},
			{
				key: '10',
				index: 10,
				id: 10,
				productCode: 'Sub Section 02',
				version: 'Version 101',
				productName: 'All Around Handsake',
				children: [
					{
						key: '10a',
						index: 11,
						id: 11,
						productCode: 'Im in sub-section!',
						version: 'Version 101',
						productName: 'All Around Handsake',
						children: [
							{
								key: 'zzz',
								index: 101,
								id: 101,
								productCode: 'zzz',
								version: 'Version 101',
								productName: 'All Around Handsake'
							}
						]
					},
					{
						key: '10b',
						index: 12,
						id: 12,
						productCode: 'Im in sub-section!',
						version: 'Version 101',
						productName: 'All Around Handsake'
					}
				]
			}
		]
	},
	{
		key: '4',
		index: 4,
		id: 4,
		productCode: 'Section 02',
		version: '',
		productName: '',
		children: [
			{
				key: '4a',
				index: 24,
				id: 24,
				productCode: 'ABENA-001',
				version: 'Version 101',
				productName: 'All Around Handsake'
			}
		]
	},
	{
		key: '5',
		index: 5,
		id: 5,
		productCode: 'ABENA-001',
		version: 'Version 101',
		productName: 'All Around Handsake',
		children: []
	},
	{
		key: '6',
		index: 6,
		id: 6,
		productCode: 'ABENA-001',
		version: 'Version 101',
		productName: 'All Around Handsake'
	}
];

const selectedIDs = [5, 12, 101];

// Recursive delete function
const filterProductData = (data) => {
	return data.filter((item) => {
		if (selectedIDs.includes(item.id)) {
			return false;
		}
		if (item.children) {
			const filteredChildren = filterProductData(item.children);
			item.children = filteredChildren.length > 0 ? filteredChildren : [];
		}
		return true;
	});
};

const filteredData = filterProductData(productData);
console.log(filteredData);
