import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// Components imports:
import {ProductComponent} from "../../components/product/ProductComponent";
import {BookDetailsComponent} from "../../components/product/BookDetailsComponent";
import {AuthorDetailsComponent} from "../../components/product/AuthorDetailsComponent";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: ProductComponent,
        children: [
          { path: "", redirectTo: "product", pathMatch: "full" },
          { path: "book-details", component: BookDetailsComponent },
          { path: "author-details", component: AuthorDetailsComponent }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {}