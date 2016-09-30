import {Category} from "./enums/enums";
import {Book, iDamageLogger, iLibrarian, iAuthor} from "./interfaces/interface.book";

function getAllBooks(): Book[] {

  let books = [
    {
      id: 1,
      title: 'Ulysses',
      author: 'James Joyce',
      available: true,
      category: Category.Fiction,
      markDamage: (reason: string) => {console.log("Damage: " + reason);}
    },
    {
      id: 2,
      title: 'A Farewell to Arms',
      author: 'Ernest Hemingway',
      available: false,
      category: Category.Fiction
    },
    {
      id: 3,
      title: 'Moby Dick',
      author: 'Herman Melville',
      available: true,
      category: Category.Poetry
    },
    {
      id: 4,
      title: 'I know why the caged bird sings',
      author: 'Maya Angelou',
      available: true,
      category: Category.Fiction
    }
  ];

  return books;
}

function logFirstAvailable( books = getAllBooks() ): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for ( let currentBook of books ) {
    if ( currentBook.available ) {
      firstAvailable = currentBook.title;
      break;
    }
  }
}

//default param example
function getBookTitlesByCategory( categoryFilter: Category = Category.Fiction ): Array<string> {
  const books = getAllBooks();
  const bookArray: string[] = [];

  console.log('Getting books in the category: ' + Category[ categoryFilter ]);

  for ( let currentBook of books ) {
    if ( currentBook.category === categoryFilter ) {
      bookArray.push(currentBook.title);
    }
  }
  return bookArray;
}

function LogBookTitles( titles: string[] ): void {
  for ( let title of titles ) {
    // console.log(title);
  }
}

function GetBookById( id: number ): Book {
  let books = getAllBooks();

  //return a new array instead of the books array;
  //get the first object in the array that matches that ID passed
  return books.filter(book => book.id === id)[ 0 ];
}

function CreateCustomerId( name: string, id: number ): string {
  return name + id;
}

//optional params example
function CreateCustomer( name: string, age?: number, city?: string ): void {
  console.log('creating customer ' + name);
}

//rest param example - rest params is the dot dot dot syntax
function CheckoutBooks( customer: string, ...bookIDs: number[] ): string[] {
  console.log('Getting books for customer ' + customer);

  let booksCheckedOut: string[] = [];

  for ( let id of bookIDs ) {
    let book = GetBookById(id);
    if ( book.available ) {
      booksCheckedOut.push(book.title);
    }
  }
  return booksCheckedOut;
}

function printBook(book: Book): void{

  console.log("print book(): " + book.title + " by " + book.author);

}
printBook(GetBookById(1));

let damages = GetBookById(1);
damages.markDamage("Spine torn");

//use new interface for dmg
let logdmg: iDamageLogger;

logdmg = (damage: string) => console.log("Damage Reported: " + damage);

logdmg("torn paper");



//define a type for a function
let IdGenerator: ( chars: string, nums: number ) => string;
//this is the same function as CreateCustomerId but using a TYPE and es6
IdGenerator = ( name: string, id: number ) => {
  return id + name
};


// define new ID
let myID: string = IdGenerator('daniel', 20);


var test = { 1: "1", 2: "2", 3: "3" };

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
const fictionBooks = getBookTitlesByCategory();

LogBookTitles(fictionBooks);

//start output begining with one and not 0
//es6 function example
// fictionBooks.forEach((val, idx, arr) => console.log(++idx));

GetBookById(1);

//Rest params call function example
let myBooks: string[] = CheckoutBooks('thorne', 1, 2, 3, 4);
myBooks.forEach(title => console.log('Checked out book ' + title));

let favoriteAuthor: iAuthor = {
  email: 'egon@gmail.com',
  name: "egon",
  numBooksPublished: 2
};

let favLibrarian: iLibrarian = {
  name: "peter",
  email: "peter@gmail.com",
  assistCustomer: (name: string) => console.log(this.name + " is helping " + name),
  department:"science fiction"
};
