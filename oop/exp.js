class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummar() {
        return `${this.title} was written by ${this.author} in year ${this.year}`;
    }

    static getAge(book) {
        return book.year;
    }
}

class UI {
    static bar(book) {
        return `${book.title} is a good book.`;
    }
}

// const book1 = new Book('Book one', 'Abdul Pangandaman', 2013);
// console.log(Book.getAge(book1));

const book = new Book('Atomic Habits', 'John Smith', '2000');
console.log(UI.bar(book));