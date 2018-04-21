import {HttpJslet, WebJslet, HttpRequest, HttpResponse} from "jec-exchange";
import * as path from "path";
import {HeaderService} from "../services/HeaderService";
import {Inject} from "jec-jdi";

const PATH:string = process.cwd() + "/workspace/sample-blm-data/images/books/covers/";

/**
 * Returns the image resource associated with a book's cover.
 */
@WebJslet({
  name: "CoversJslet",
  urlPatterns: ["/covers/*"]
})
export class Covers extends HttpJslet {

  @Inject({ type: HeaderService }) public headerService:any;

  public doGet(req:HttpRequest, res:HttpResponse, exit:Function):void {
    const filePath:string = PATH + path.basename(req.getPath());
    this.headerService.setHeaders(res);
    exit(req, res.sendFile(filePath), null);
  }
}
