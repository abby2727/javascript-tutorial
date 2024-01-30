class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummar() {
        return `${this.title} was written by ${this.author} in year ${this.year}`;
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Magazine 1', 'John Smith', '2015', 'February');
console.log(mag1.getSummar());