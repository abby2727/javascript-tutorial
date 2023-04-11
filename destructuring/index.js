const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
}

// const id = note.id;
// const date = note.date;
// const title = note.title;

const { id, title, date } = note;
console.log(`${id} and ${date} and ${title}`)