const obj = [
	{
		name: 'John Doe',
		age: 25,
		address: '123 Main St, City',
		approved: true
	},
	{
		name: 'Jane Smith',
		age: 30,
		address: '456 Elm St, City',
		approved: false
	},
	{
		name: 'David Johnson',
		age: 40,
		address: '789 Oak St, City',
		approved: true
	},
	{
		name: 'Sarah Williams',
		age: 35,
		address: '321 Pine St, City',
		approved: true
	},
	{
		name: 'Michael Brown',
		age: 27,
		address: '654 Cedar St, City',
		approved: false
	},
	{
		name: 'Emily Davis',
		age: 22,
		address: '987 Maple St, City',
		approved: true
	},
	{
		name: 'Daniel Wilson',
		age: 33,
		address: '159 Birch St, City',
		approved: true
	},
	{
		name: 'Olivia Thompson',
		age: 29,
		address: '753 Walnut St, City',
		approved: false
	},
	{
		name: 'Christopher Martinez',
		age: 31,
		address: '246 Pine St, City',
		approved: true
	},
	{
		name: 'Ava Garcia',
		age: 26,
		address: '531 Elm St, City',
		approved: true
	}
];

console.log({ obj });

const newObj = obj.filter((item) => {
	return item.approved;
});

console.log({ newObj });
