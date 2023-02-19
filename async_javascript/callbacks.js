const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        // posts.forEach((value, index) => {
        //     output += `<li>${value.title}</li>`;
        // });
        for (const item in posts) {
            output += `<li>${posts[item].title}</li>`;
            // console.log(posts[item].title);
        }
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();
createPosts({ title: 'Post Three', body: 'This is post three' }, getPosts);
