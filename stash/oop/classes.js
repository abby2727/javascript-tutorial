class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummar() {
        return `${this.title} was written by ${this.author} in year ${this.year}`;
    }

    static getAge() {
        let myAge = new Date().getFullYear() - this.year;
        return `${this.title} is ${myAge} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static foo() {
        return 'Over';
    }
}

// * Instantiates Object
const book1 = new Book('Boook One', 'Abdul Pangandaman', '2023');
// const book2 = new Book('Boook Two', 'John Smith', '2012');
// console.log(book1);

// * Static method: Can be use without instantiating an object.
console.log(Book.getAge(book1));