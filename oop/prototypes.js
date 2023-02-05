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

// getAge
Book.prototype.getAge = function () {
    let myAge = new Date().getFullYear() - this.year;
    return `${this.title} is ${myAge} years old`;
}

// Revise / Change Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    // this.revised = true;
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2015');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2);
book2.revise('2023');
console.log(book2);