import {Category} from "../enums/enums";

interface Book {
  id: number,
  title: string,
  author: string,
  available: boolean,
  category: Category
  pages?: string;
  markDamage?: iDamageLogger;
}

export interface iDamageLogger {
  (reason: string): void;
}

export interface iPerson {
  name: string;
  email: string;
}

interface iAuthor extends iPerson{
  numBooksPublished: number;
}

interface iLibrarian extends iPerson{
  department: string;
  assistCustomer: (name: string) => void;
}

export {Book, iAuthor, iLibrarian};