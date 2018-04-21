import {HttpJslet, WebJslet, HttpRequest, HttpResponse} from "jec-exchange";
import * as path from "path";
import {Inject} from "jec-jdi";
import {HeaderService} from "../services/HeaderService";

const PATH:string = process.cwd() + "/workspace/sample-blm-data/images/authors/";

/**
 * Returns the image resource associated with an author.
 */
@WebJslet({
  name: "AuthorsJslet",
  urlPatterns: ["/authors/*"]
})
export class Authors extends HttpJslet {
  
  @Inject({ type: HeaderService })
  public headerService:HeaderService;

  public doGet(req:HttpRequest, res:HttpResponse, exit:Function):void {
    const filePath:string = PATH + path.basename(req.getPath());
    this.headerService.setHeaders(res);
    exit(req, res.sendFile(filePath), null);
  }
}
