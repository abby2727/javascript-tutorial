function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                console.log(response.json())
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('/experiment/data.json')
    .catch(console.log());