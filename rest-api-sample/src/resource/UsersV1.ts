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

import {ResourcePath, RootPathRefs, GET, Exit} from "jec-jars";
import {User} from "../business/User";
import {Rights} from "../business/Rights";

/**
 * Exposes all application users as a REST resource. Resource path is
 * <code>http://localhost:8484/rest-api-sample/sample.app/v1.0/users</code>.
 */
@ResourcePath("users")
@RootPathRefs(["users-v1"])
export class UsersV1 {
  
  /**
   * Returns the list of users registered in the app. User objects are of the
   * type of <code>User</code>.
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