import {ResourcePath, GET, Exit} from "jec-jars";
import {User} from "../business/User";
import {Rights} from "../business/Rights";

/**
 * Esposes all application users as a REST resource.
 */
@ResourcePath("users")
export class Users {
  
  /**
   * Returns the list of users registered in the app.
   * 
   * @param exit The callback function used to send data to the HTTP response.
   */
  @GET()
  public getUsers(@Exit exit:Function):void {
    const result: Array<User> = new Array<User>();
    const user:User = new User();
    user.name = "John DOE";
    user.rights = Rights.READ;
    result.push(user);
    exit(result);
  }
}