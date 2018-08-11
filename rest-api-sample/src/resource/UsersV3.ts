//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {ResourcePath, RootPathRefs, GET, Exit, PathParam} from "jec-jars";
import {HttpStatusCode} from "jec-commons";
import {Inject} from "jec-jdi";
import {UserDao} from "../service/UserDao";
import {UserV3} from "../business/UserV3";
import {UsersException} from "../exception/UsersException";

/**
 * Exposes all application users as a REST resource. Resource path is
 * <code>http://localhost:8484/rest-api-sample/sample.app/v3/users</code>.
 */
@ResourcePath("users")
@RootPathRefs(["users-v3"])
export class UsersV3 {
  
  /**
   * The DAO used to access data.
   */
  @Inject({ type: UserDao })
  public dao:UserDao<UserV3>;
  
  /**
   * Returns the list of users registered in the app. User objects are of the
   * type of <code>UserV3</code>.
   * 
   * @param {Function} exit the callback function used to send data to the HTTP
   *                        response.
   */
  @GET()
  public getUsers(@Exit exit:Function):void {
    this.dao.getUsers((data:UserV3[], err:UsersException)=>{
      exit(data, err, this.getErrorCode(err));
    });
  }
  
  /**
   * Return the user registered in the app with the specified identifier.
   * 
   * @param {string} id the identifier of the user to find.
   * @param {Function} exit the callback function used to send data to the HTTP
   *                        response.
   */
  @GET({
    route: "/:userId"
  })
  public getUser(@PathParam userId:string, @Exit exit:Function):void {
    this.dao.getUser(userId, (data:UserV3, err:UsersException)=>{
      exit(data, err, this.getErrorCode(err));
    });
  }

  /**
   * Returns the status code for the specified error, or <code>null</code>
   * whether <code>err</code> is <code>null</code>.
   * 
   * @param {UsersException} err the error for which to resolve the status
   *                             code.
   * @return {HttpStatusCode} the status code for the specified error, or
   *                          <code>null</code>.
   */
  private getErrorCode(err:UsersException):HttpStatusCode {
    return err ? err.errorCode : null;
  }
}