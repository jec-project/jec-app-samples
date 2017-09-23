import {HttpJslet, WebJslet, HttpRequest, HttpResponse} from "jec-exchange";

/**
 * The jslet that exposes the current status of the EJP.
 */
@WebJslet({
  name: "Status",
  urlPatterns: ["/status"],
  template: "/views/status.ejs"
})
export class Status extends HttpJslet {

  /**
   * @inheritDoc
   */
  public doGet(req:HttpRequest, res:HttpResponse, exit:Function):void {
    exit(req, res, this.getContext().getStatusInfo());
  }
}
