import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient, HttpParams, HttpErrorResponse} from "@angular/common/http";
import {Router} from '@angular/router';
import {DataStorageService} from "../services/DataStorageService";
import {PageEvent} from '@angular/material';

/**
 * The search view of the Book Library Manager.
 */
@Component({
  selector: 'search-find',
  templateUrl: "./templates/search.html"
})
export class SearchComponent implements OnInit {

  /**
   * Constructor function.
   */
  constructor(private _httpClient:HttpClient, private _router:Router,
              private _storageService:DataStorageService) {}

  /**
   * The number of items for the current search.
   */
  public resultLength:number = 0;

  /**
   * The index of the current page, used to compute pagination data.
   */
  public pageId:number = 0;

  /**
   * The number of items displayed whithin a page.
   */
  public pageSize:number = 12;
  
  /**
   * The collection of books displayed in the component's view.
   */
  public books:any[];
  
  /**
   * The control that specifies the token used to search books in the database.
   */
  public token:FormControl;

  /**
   * @override
   */
  public ngOnInit():void {
    this.token = new FormControl();
    if(this._storageService.hasBooks()){
      this.initResultLength();
      this.paginate();
    } 
  }

  /**
   * Search books in the database and returns the collection of items that match
   * the search token.
   */
  public doSearch():void {
    const tokenValue:string = this.token.value;
    let url:string = "http://localhost:3002/sample-blm-books/books";
    let params:HttpParams = null;
    if(tokenValue)  {
      params = new HttpParams().set("token", tokenValue);
      url += "/search";
    }         
    this._httpClient.get(url, { params:params } )
                    .subscribe(
                      data => {
                        this._storageService.setBookList(data as any[]);
                        this.initResultLength();
                        this.paginate();
                      },
                      (err:HttpErrorResponse) => {
                        if (err.error instanceof Error) {
                          console.log("Client-side error occured.");
                        } else {
                          console.log("Server-side error occured.");
                        }
                      }
                    );
  }
  
  /**
   * Handles events fired when the user selects a new page from the paginator
   * component.
   */
  public pageChange(event:PageEvent):void {
    this.pageId = event.pageIndex;
    this.paginate();
  }

  /**
   * Paginates the results of the search.
   */
  public paginate():void {
    const bookList:any[] = this._storageService.getBookList();
    const from:number = this.pageId * this.pageSize;
    let to:number = from + this.pageSize;
    if(to > this.resultLength) to = this.resultLength;
    this.books = bookList.slice(from, to);
  }

  /**
   * Resets the current search.
   */
  public resetSearch():void {
    this.resultLength = this.pageId = 0;
    this.books.splice(0);
    this._storageService.setBookList(null);
  }

  /**
   * Navigates to the resource that shows information about the selected book.
   * 
   * @param {any} book the book selected by the user.
   */
  public showDetails(book:any):void {
    this._storageService.setBook(book);
    this._router.navigate(["product"]);
  }

  /**
   * Initializes the value of the resultLength property.
   */
  private initResultLength():void {
    this.resultLength = this._storageService.getBookList().length;
  }
}