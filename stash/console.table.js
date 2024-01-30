const books = [
	{
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		language: 'English',
		address: {
			street: '123 Main Street',
			city: 'New York',
			country: 'USA'
		},
		hobbies: ['Reading', 'Hiking', 'Photography']
	},
	{
		title: '1984',
		author: 'George Orwell',
		language: 'English',
		address: {
			street: '123 Main Street',
			city: 'New York',
			country: 'USA'
		},
		hobbies: ['Reading', 'Hiking', 'Photography']
	},
	{
		title: 'One Hundred Years of Solitude',
		author: 'Gabriel García Márquez',
		language: 'Spanish',
		address: {
			street: '123 Main Street',
			city: 'New York',
			country: 'USA'
		},
		hobbies: ['Reading', 'Hiking', 'Photography']
	}
];

console.log(books);
console.table(books);
