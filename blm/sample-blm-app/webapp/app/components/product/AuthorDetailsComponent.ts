import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {DataStorageService} from "../../services/DataStorageService";

/**
 * Contains logic of the view that displays authors information.
 */
@Component({
  selector: "app-product",
  templateUrl: "./templates/product/author-details-component.html"
})
export class AuthorDetailsComponent implements OnInit {

  /**
   * Constructor function.
   */
  constructor(private _httpClient:HttpClient, private _router:Router,
              private _storageService:DataStorageService){}
  
  /**
   * The reference to the current author displayed in the view.
   */
  public author:any = null;

  /**
   * @override
   */
  public ngOnInit():void {
    let url:string = "http://localhost:3004/sample-blm-authors/authors/"
                     + this._storageService.getBook().author.id;
    this._httpClient.get(url)
    .subscribe(
      data => {
        this.author = data;
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
}