import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Book } from "../models/book.model";
import * as firebase from 'firebase';
import DataSnapshot from 'firebase/database'


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();
  constructor() {
      this.getBooks();
  }
  emitBooks(){
    this.booksSubject.next(this.books);
  }

  // save books in database
  saveBooks() {
      firebase.database().ref('/books').set(this.books);
  }
  // get books from database
  getBooks() {
      firebase.database().ref('/books')
        .on('value',(data: DataSnapshot) => {
            this.books = data.val() ? data.val() : [];
            this.emitBooks();
        })
  }
  // get book by id from database
  getSingleBook(id: number) {
      return new Promise(
        ((resolve, reject) => {
            firebase.database().ref('/books/' + id).once('value').then(
              (data: DataSnapshot) => {
                  resolve(data.val());
              } , (error) => {
                  reject(error);
              }
            );
        })
      );
  }

  // add a new book to database
  createNewBook(newBook: Book){
      this.books.push(newBook);
      this.saveBooks();
      this.emitBooks();
  }

  // delete book
  removeBook(book: Book) {
      const bookIndexToRemove = this.books.findIndex(
        (bookEl) => {
            if(bookEl === book ){
                return true ;
            }
        }
      );
      this.books.splice(bookIndexToRemove,1);
      this.saveBooks();
      this.emitBooks();
  }


}
