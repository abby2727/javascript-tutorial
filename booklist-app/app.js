// * Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.authr = author;
        this.isbn = isbn;
    }
}

// * UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '12345'
            },
            {
                title: 'Book Two',
                author: 'John Smith',
                isbn: '56789'
            }
        ];

        const books = StoredBooks;

        books.forEach(function (myBook) {
            UI.addBookToList(myBook);
        });
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// * Store Class: Handles Storage

// * Event: Display Books (GET)
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// * Event: Add a Book (POST)
document.querySelector('#book-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);
    UI.addBookToList(book);

    UI.clearFields();
});

// * Event: Remove a Book (DELETE)