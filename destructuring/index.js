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
    date = new Date(),
    author: { firstName },
    tags: [personal]
} = note;

console.log("I am " + personal)
console.log("DATE", date)