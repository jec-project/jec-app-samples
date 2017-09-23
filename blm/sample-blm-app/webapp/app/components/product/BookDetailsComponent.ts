import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {DataStorageService} from "../../services/DataStorageService";

/**
 * Contains logic of the view that displays books information.
 */
@Component({
  selector: "app-product",
  templateUrl: "./templates/product/book-details-component.html"
})
export class BookDetailsComponent implements OnInit {

  /**
   * Constructor function.
   */
  constructor(private _router:Router,
              private _storageService:DataStorageService){}

  
  /**
   * The reference to the current book displayed in the view.
   */
  public book:any = null;
  
  /**
   * @override
   */
  public ngOnInit():void {
    this.book = this._storageService.getBook();
  }
}