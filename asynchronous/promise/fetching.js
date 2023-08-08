function fetchDataWithPromise() {
	fetch('https://jsonplaceholder.typicode.com/postsxx/')
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log('Error', err));
}

fetchDataWithPromise();
