const contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points']
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid']
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin']
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes']
	}
];

function lookUpProfile(name, prop) {
	const foundObj = contacts.find((c) => c.firstName === name);

	if (!foundObj) return 'No such contact';
	if (!foundObj.hasOwnProperty(prop)) return 'No such property';

	return foundObj[prop];
}

console.log(lookUpProfile('Akira', 'likes'));
