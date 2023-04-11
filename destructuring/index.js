const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
    author: {
        firstName: 'Sherlock',
        lastName: 'Holmes',
    }
}

// const mLastName = note.author.lastName;
const {
    id,
    title,
    date,
    author: { firstName, lastName }
} = note;
console.log(firstName)