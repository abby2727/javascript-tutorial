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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 2000);
    });
}

async function init() {
    await createPost({
        title: 'Post Three',
        body: 'This is post three'
    });

    getPosts();
}

init();
