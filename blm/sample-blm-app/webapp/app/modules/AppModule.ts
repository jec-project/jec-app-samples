import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

// Material modules imports:
import {MatToolbarModule, MatButtonModule, MatIconModule, MatChipsModule,
        MatCardModule, MatGridListModule, MatInputModule,
        MatPaginatorModule} from '@angular/material';

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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatPaginatorModule
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