const data = [
	{
		name: 'John',
		id: 1,
		key: 123,
		code: 'ABC'
	},
	{
		name: 'Alice',
		id: 2,
		key: 456,
		code: 'DEF'
	},
	{
		name: 'Bob',
		id: 3,
		key: 789,
		code: 'GHI'
	},
	{
		name: 'Sarah',
		id: 4,
		key: 987,
		code: 'JKL'
	},
	{
		name: 'Michael',
		id: 5,
		key: 654,
		code: 'MNO'
	}
];

// * filter method returns new array that pass a specific condition

// const deleteID = 3;
// const newData = data.filter((value) => value.id !== deleteID);
// console.log(newData);

const deleteIDs = [1, 2, 3];
const newData = data.filter((value) => !deleteIDs.includes(value.id));
console.log(newData);
