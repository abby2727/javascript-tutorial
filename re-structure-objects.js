function restructurePerson(person) {
	const { firstName, lastName, address, ...rest } = person;
	const newPerson = {
		fullName: { firstName, lastName, address: address.street },
		...rest
	};

	return newPerson;
}

const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	isStudent: false,
	address: {
		street: 123,
		city: 'Anytown',
		country: 'USA'
	}
};

console.log(restructurePerson(person));
