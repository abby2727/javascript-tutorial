const note = {
    title: 'My first note',
    author: {
        firstName: 'Sherlock',
        lastName: 'Holmes',
    },
    tags: ['personal', 'writing', 'investigations'],
}

const {
    title,
    author,
    author: { firstName, lastName },
    tags: [personal, writing, inv]
} = note;

console.log("I am " + writing)