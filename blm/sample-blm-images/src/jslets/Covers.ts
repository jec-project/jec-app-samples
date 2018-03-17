import {HttpJslet, WebJslet, HttpRequest, HttpResponse} from "jec-exchange";
import {HttpHeader} from "jec-commons";
import * as path from "path";

const PATH:string = process.cwd() + "/workspace/sample-blm-data/images/books/covers/";

/**
 * Returns the image resource associated with a book's cover.
 */
@WebJslet({
  name: "CoversJslet",
  urlPatterns: ["/covers/*"]
})
export class Covers extends HttpJslet {
  
  public doGet(req:HttpRequest, res:HttpResponse, exit:Function):void {
    const filePath:string = PATH + path.basename(req.getPath());
    res.setHeader(HttpHeader.ACCESS_CONTROL_ALLOW_ORIGIN, "http://localhost:3001");
    res.setHeader(HttpHeader.CACHE_CONTROL, "public, max-age=31536000");
    exit(req, res.sendFile(filePath), null);
  }
}
