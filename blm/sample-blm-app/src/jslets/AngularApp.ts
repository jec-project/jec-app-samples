import {HttpJslet, WebJslet, HttpRequest, HttpResponse} from "jec-exchange";

/**
 * The jslet that manages available routes for the Angular app.
 */
@WebJslet({
  name: "AngularApp",
  urlPatterns: [
    "/app",
    "/app/",
    "/app/welcome",
    "/app/search"
  ],
  template: "/views/angular-app.ejs"
})
export class AngularApp extends HttpJslet {
  
  /**
   * @inheritDoc
   */
  public doGet(req:HttpRequest, res:HttpResponse, exit:Function):void {
    exit(req, res);
  }
}
