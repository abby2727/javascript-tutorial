// * Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in year ${this.year}`;
}

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

const mag1 = new Magazine('Mag One', 'Robert Zee', '2018', 'Feb');

console.log(mag1);