define(["require", "exports", "./enums/enums"], function (require, exports, enums_1) {
    "use strict";
    var _this = this;
    function getAllBooks() {
        var books = [
            {
                id: 1,
                title: 'Ulysses',
                author: 'James Joyce',
                available: true,
                category: enums_1.Category.Fiction,
                markDamage: function (reason) { console.log("Damage: " + reason); }
            },
            {
                id: 2,
                title: 'A Farewell to Arms',
                author: 'Ernest Hemingway',
                available: false,
                category: enums_1.Category.Fiction
            },
            {
                id: 3,
                title: 'Moby Dick',
                author: 'Herman Melville',
                available: true,
                category: enums_1.Category.Poetry
            },
            {
                id: 4,
                title: 'I know why the caged bird sings',
                author: 'Maya Angelou',
                available: true,
                category: enums_1.Category.Fiction
            }
        ];
        return books;
    }
    function logFirstAvailable(books) {
        if (books === void 0) { books = getAllBooks(); }
        var numberOfBooks = books.length;
        var firstAvailable = '';
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var currentBook = books_1[_i];
            if (currentBook.available) {
                firstAvailable = currentBook.title;
                break;
            }
        }
    }
    function getBookTitlesByCategory(categoryFilter) {
        if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
        var books = getAllBooks();
        var bookArray = [];
        console.log('Getting books in the category: ' + enums_1.Category[categoryFilter]);
        for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
            var currentBook = books_2[_i];
            if (currentBook.category === categoryFilter) {
                bookArray.push(currentBook.title);
            }
        }
        return bookArray;
    }
    function LogBookTitles(titles) {
        for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
            var title = titles_1[_i];
        }
    }
    function GetBookById(id) {
        var books = getAllBooks();
        return books.filter(function (book) { return book.id === id; })[0];
    }
    function CreateCustomerId(name, id) {
        return name + id;
    }
    function CreateCustomer(name, age, city) {
        console.log('creating customer ' + name);
    }
    function CheckoutBooks(customer) {
        var bookIDs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            bookIDs[_i - 1] = arguments[_i];
        }
        console.log('Getting books for customer ' + customer);
        var booksCheckedOut = [];
        for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
            var id = bookIDs_1[_a];
            var book = GetBookById(id);
            if (book.available) {
                booksCheckedOut.push(book.title);
            }
        }
        return booksCheckedOut;
    }
    function printBook(book) {
        console.log("print book(): " + book.title + " by " + book.author);
    }
    printBook(GetBookById(1));
    var damages = GetBookById(1);
    damages.markDamage("Spine torn");
    var logdmg;
    logdmg = function (damage) { return console.log("Damage Reported: " + damage); };
    logdmg("torn paper");
    var IdGenerator;
    IdGenerator = function (name, id) {
        return id + name;
    };
    var myID = IdGenerator('daniel', 20);
    var test = { 1: "1", 2: "2", 3: "3" };
    var poetryBooks = getBookTitlesByCategory(enums_1.Category.Poetry);
    var fictionBooks = getBookTitlesByCategory();
    LogBookTitles(fictionBooks);
    GetBookById(1);
    var myBooks = CheckoutBooks('thorne', 1, 2, 3, 4);
    myBooks.forEach(function (title) { return console.log('Checked out book ' + title); });
    var favoriteAuthor = {
        email: 'egon@gmail.com',
        name: "egon",
        numBooksPublished: 2
    };
    var favLibrarian = {
        name: "peter",
        email: "peter@gmail.com",
        assistCustomer: function (name) { return console.log(_this.name + " is helping " + name); },
        department: "science fiction"
    };
});
