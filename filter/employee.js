const employees = [
	{ id: 15, name: 'John', dept: 'Support' },
	{ id: 10, name: 'Max', dept: 'IT' },
	{ id: 12, name: 'Bella', dept: 'Support' },
	{ id: 19, name: 'Amelia', dept: 'IT' },
	{ id: 20, name: 'Robert', dept: 'IT' }
];

const onlyITEmployees = employees.filter((val) => {
	return val.dept === 'IT';
});

console.log(onlyITEmployees);
