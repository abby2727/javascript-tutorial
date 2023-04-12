const payload = {
    currentPage: 1,
    data: [1, 2, 3],
    id: 'abc123',
    totalPages: 5,
    pageSize: 10
};

// * Gather remaining properties into new Object
const { currentPage, data, id, ...rest } = payload;

console.log(currentPage)
console.log(rest)