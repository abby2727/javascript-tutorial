const title = document.getElementById('title')

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    let text = ''
    for (const key in data) {
        text += `<p>ID: ${data[key].id}, Name: ${data[key].name}</p>`;
    }
    title.innerHTML = text
}

fetchData();