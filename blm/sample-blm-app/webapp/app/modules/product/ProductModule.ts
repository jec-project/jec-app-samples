import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ProductRoutingModule} from "./ProductRoutingModule";

// Material modules imports:
import {MdButtonModule, MdIconModule, MdTabsModule,
        MdCardModule} from '@angular/material';

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
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdCardModule
  ],
  declarations: [
    ProductComponent,
    BookDetailsComponent,
    AuthorDetailsComponent
  ]
})
export class ProductModule {}