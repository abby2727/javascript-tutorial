const payload = {
	currentPage: 1,
	data: [1, 2, 3],
	id: 'abc123',
	totalPages: 5,
	pageSize: 10
};

const { currentPage, data, id, newID = 'abdul', ...rest } = payload;

// console.log(data);
console.log(rest);
