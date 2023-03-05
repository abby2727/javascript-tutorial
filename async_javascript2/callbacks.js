const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
]

function getPosts() {
    let output = document.getElementById('output');
    setTimeout(() => {
        let text = '';
        posts.forEach((post, index) => {
            text += `<li>${post.body}</li>`;
        });
        output.innerHTML = text;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);

        callback();
    }, 2000);
}

createPost({
    title: 'Post Three',
    body: 'This is post three'
}, getPosts);
