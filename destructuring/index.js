const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
}

console.log(typeof note)
for (let [key, value] of Object.entries(note)) {
    console.log(typeof `${key}: ${value}`)
}