import {Injectable} from '@angular/core';

/**
 * A singleton service that stores data to share information between views.
 */
@Injectable()
export class DataStorageService {

  /**
   * Constructor function.
   */
  constructor() {}

  /**
   * A reference to the stored object that represents a list of books associated
   * with the last search.
   */
  private _bookList:any[] = null;
  
  /**
   * A reference to the stored object that represents data for a book.
   */
  private _book:any = null;

  /**
   * Returns an object that represents the stored book's data.
   */
  public getBook():any {
    return this._book;
  }

  /**
   * Stores the list of books associated with the last search.
   */
  public setBook(book:any):void {
    this._book = book;
  }
  
  /**
   * Returns the list of books associated with the last search.
   */
  public getBookList():any[] {
    return this._bookList;
  }

  /**
   * Stores an object that represents the specified book's data.
   */
  public setBookList(bookList:any[]):void {
    this._bookList = bookList;
  }

  /**
   * Returns a boolean value that indicates whether the services contains books
   * (true), or not (false).
   */
  public hasBooks():boolean {
    return (this._bookList && this._bookList.length > 0);
  }
}