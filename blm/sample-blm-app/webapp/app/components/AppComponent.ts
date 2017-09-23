import {Component} from "@angular/core";

/**
 * The Angular App entry point.
 */
@Component({
  selector: "app-main",
  templateUrl: "./templates/app-main.html"
})
export class AppComponent {

  /**
   * Navigates to the JEC project on GitHub.
   */
  public goToJEC():void {
    window.location.href = "https://github.com/pechemann/JEC";
  }
}