let article = {
	id: '001',
	title: 'JavaScript Object Destructuring',
	writer: {
		name: 'Chameera'
	}
};

let {
	id: articleID,
	title,
	writer: { name: writerName }
} = article;

console.log(articleID); // 001
console.log(title); // JavaScript Object Destructuring
console.log(writerName); // Chameera
