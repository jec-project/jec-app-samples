import {Component} from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

/**
 * The Angular App entry point.
 */
@Component({
  selector: "app-main",
  templateUrl: "./templates/app-main.html"
})
export class AppComponent {

  /**
   * Constructor. Creates a new <code>AppComponent</code> instance.
   * 
   * @param {MatIconRegistry} iconRegistry 
   * @param {DomSanitizer} sanitizer 
   */
  constructor(iconRegistry:MatIconRegistry, sanitizer:DomSanitizer) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl("../styles/assets/icon-set.svg")
    );
  }

  /**
   * Navigates to the JEC project on GitHub.
   */
  public goToJEC():void {
    window.location.href = "https://github.com/pechemann/JEC";
  }
}