import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ProductRoutingModule} from "./ProductRoutingModule";

// Material modules imports:
import {MatButtonModule, MatIconModule, MatTabsModule,
        MatCardModule} from '@angular/material';

// Components imports:
import {ProductComponent} from "../../components/product/ProductComponent";
import {BookDetailsComponent} from "../../components/product/BookDetailsComponent";
import {AuthorDetailsComponent} from "../../components/product/AuthorDetailsComponent";

@NgModule({
  imports: [
    // Angular modules:
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Material modules:
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule
  ],
  declarations: [
    ProductComponent,
    BookDetailsComponent,
    AuthorDetailsComponent
  ]
})
export class ProductModule {}