// * async/await - more elegant way to handle Promises.

const posts = [
	{
		title: 'Post One',
		body: 'This is post one'
	},
	{
		title: 'Post Two',
		body: 'This is post two'
	}
];

function getPosts() {
	return new Promise((resolve) => {
		setTimeout(() => {
			let text = '';
			posts.forEach((post, index) => {
				text += `<li>${post.body}</li>`;
			});

			resolve(text);
		}, 1000);
	});
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			const error = false;
			if (!error) resolve();
			else reject('Error: Something went wrong!');
		}, 2000);
	});
}

async function init() {
	try {
		await createPost({
			title: 'Post Three',
			body: 'This is post three'
		});

		const postsHtml = await getPosts();
		const output = document.getElementById('output');
		output.innerHTML = postsHtml;
	} catch (error) {
		console.error(error);
	}
}

init();
