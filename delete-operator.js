// * The JavaScript delete operator removes a property from an object;

const Employee = {
	firstName: 'John',
	lastName: 'Doe',
	age: 24,
	gender: 'male'
};

delete Employee.age;

console.log(Employee);
