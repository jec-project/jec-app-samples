import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// Components imports:
import {WelcomeComponent} from "../components/WelcomeComponent";
import {SearchComponent} from "../components/SearchComponent";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "welcome", pathMatch: 'full' },
      { path: "welcome", component: WelcomeComponent },
      { path: "search", component: SearchComponent },
      // Lazy loading implementation:
      { path: "product", loadChildren: "modules/product/ProductModule#ProductModule" }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}