const dataSource = [
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

// * Level 1
// const deleteID = 3;
// const newData = dataSource.filter((value) => value.id !== deleteID);
// console.log(newData);

// * Level 2
// const deleteIDs = [1, 2, 3];
// const newData = dataSource.filter((value) => !deleteIDs.includes(value.id));
// console.log(newData);

// * Level 3

const deleteIDs = [1, 2, 5];

function onDeleteData(data) {
	return data.filter((item) => {
		if (deleteIDs.includes(item.id)) {
			return false;
		}
		return true;
	});
}

console.log(onDeleteData(dataSource));
