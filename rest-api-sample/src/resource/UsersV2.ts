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
import {UserV2} from "../business/UserV2";
import {Rights} from "../business/Rights";

/**
 * Exposes all application users as a REST resource. Resource path is
 * <code>http://localhost:8484/rest-api-sample/sample.app/v2.0/users</code>.
 */
@ResourcePath("users")
@RootPathRefs(["users-v2"])
export class UsersV2 {
  
  /**
   * Returns the list of users registered in the app. User objects are of the
   * type of <code>UserV2</code>.
   * 
   * @param exit The callback function used to send data to the HTTP response.
   */
  @GET()
  public getUsers(@Exit exit:Function):void {
    const result: Array<UserV2> = new Array<UserV2>();
    const user:UserV2 = new UserV2();
    user.firstname = "John";
    user.lastname = "DOE";
    user.email = "jdoe@domain.com";
    user.rights = Rights.READ;
    result.push(user);
    exit(result);
  }
}