const employees = [
	{ id: 15, name: 'John', dept: 'Support' },
	{ id: 10, name: 'Max', dept: 'IT' },
	{ id: 12, name: 'Bella', dept: 'Support' },
	{ id: 19, name: 'Amelia', dept: 'IT' },
	{ id: 20, name: 'Robert', dept: 'IT' },
];

const onlyITEmployees = employees.filter((val) => val.dept !== 'IT');
console.log(onlyITEmployees);

// const result = employees.map((em) => console.log((em.name)))
// return false;

// console.log(onlyITEmployees);

// for (let emp in onlyITEmployees) {
//     console.log(`${onlyITEmployees[emp].id} - ${onlyITEmployees[emp].name}`);
// }

// onlyITEmployees.map(event => console.log(event.name));
