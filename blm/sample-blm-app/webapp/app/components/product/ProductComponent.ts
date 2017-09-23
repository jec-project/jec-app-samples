import {Component, OnInit} from"@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {DataStorageService} from "../../services/DataStorageService";

/**
 * A lazy loaded component that is used to display the selected book's data.
 */
@Component({
  selector:"app-product",
  templateUrl:"./templates/product/product-component.html"
})
export class ProductComponent implements OnInit {

  /**
   * Constructor function.
   */
  constructor(private _router:Router, private _route:ActivatedRoute,
              private _storageService:DataStorageService){}

  /**
   * The list used to create tab items in this view.
   */
  public tabLinks:any[] = null;

  /**
   * The title of the book for which to show details.
   */
  public bookTitle:string = null;

  /**
   * @override
   */
  public ngOnInit():void {
    this.tabLinks = [
      { 
        label: "Book details",
        link: "book-details",
        icon: "description"
      },
      {
        label: "Author",
        link: "author-details",
        icon: "person"
      }
    ];
    this.bookTitle = this._storageService.getBook().title;
    this._router.navigate(["./book-details"], { relativeTo: this._route });
  }

  /**
   * Closes the details view and go back to the search view. 
   */
  public closeDetails():void {
    this._router.navigate(["../search"], { relativeTo: this._route });
  }
}