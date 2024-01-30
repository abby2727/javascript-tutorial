const getPost = async (id) => {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

getPost(50);
