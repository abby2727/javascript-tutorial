// * Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: 2014,
    getSummary: function () {
        return `${this.title} was written by ${this.author} in year ${this.year}`;
    }
}

console.log(book1.getSummary());