import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// Material modules imports:
import {MdToolbarModule, MdButtonModule, MdIconModule, MdChipsModule,
        MdCardModule, MdGridListModule, MdInputModule,
        MdPaginatorModule} from '@angular/material';

// Modules imports:
import {AppRoutingModule} from "./AppRoutingModule";

// Components imports:
import {AppComponent} from "../components/AppComponent";
import {WelcomeComponent} from "../components/WelcomeComponent";
import {SearchComponent} from "../components/SearchComponent";

// Singleton services imports:
import {DataStorageService} from "../services/DataStorageService";

@NgModule({
  imports: [
    // Angular modules:
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    AppRoutingModule,
    // Material modules:
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdChipsModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdPaginatorModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent
  ],
  providers: [
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }