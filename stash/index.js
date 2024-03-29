const products = [
	{
		id: 1,
		name: 'T-shirt',
		price: 19.99,
		category: 'Clothing',
		inStock: true,
		trProductTranslated: ['de-DE', 'pl-PL', 'en-US']
	},
	{
		id: 2,
		name: 'Headphones',
		price: 79.99,
		category: 'Electronics',
		inStock: false,
		trProductTranslated: ['de-DE', 'nl-NL', 'da-DK', 'en-US']
	},
	{
		id: 3,
		name: 'Watch',
		price: 149.99,
		category: 'Accessories',
		inStock: false,
		trProductTranslated: ['de-DE', 'en-US']
	},
	{
		id: 4,
		name: 'Sneakers',
		price: 89.99,
		category: 'Footwear',
		inStock: true,
		trProductTranslated: ['de-DE', 'pl-PL', 'nl-NL', 'en-US']
	}
];

const iAmFunction = (products) => {
	return products.map((p) => {
		return {
			...p,
			trProductTranslated: p.trProductTranslated.map((l) =>
				l.toLowerCase()
			)
		};
	});
};

console.log(iAmFunction(products));
