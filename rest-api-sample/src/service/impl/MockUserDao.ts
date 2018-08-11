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

import {Injectable} from "jec-jdi";
import {HttpStatusCode} from "jec-commons";
import {UserDao} from "../UserDao";
import {USERS_MODEL} from "../../util/MockModel";
import {UserV3Adapter} from "../../util/UserV3Adapter";
import {UserV3} from "../../business/UserV3";
import {UsersException} from "../../exception/UsersException";
import {UsersExceptionBuilder} from "../../util/UsersExceptionBuilder";

/**
 * A <code>UserDao</code> interface implementation that provides data from a 
 * local in-memory data.
 */
@Injectable({
  type: UserDao,
  name: "MockUserDao",
  retention: ["DEV"]
})
export class MockUserDao implements UserDao<UserV3> {

  /**
   * Stroes data for this <code>UserDao</code> implementation.
   */
  private readonly USER_LIST:UserV3[];

  /**
   * Creates a new MockUserDao instance.
   */
  constructor() {
    this.USER_LIST = (new UserV3Adapter()).adapt(USERS_MODEL);
  }

  /**
   * @inheritDoc
   */
  public getUsers(result:(data:UserV3[], err:any)=>void):void {
    result(this.USER_LIST, null);
  }

  /**
   * @inheritDoc
   */
  public getUser(id:string, result:(data:UserV3, err:any)=>void):void {
    const user:UserV3 = this.USER_LIST.find(
      (user: UserV3) => {
        return user.id === id;
      }
    );
    result(user, this.getNotFoundError(id, user));
  }

  /**
   * Returns a new <code>UsersException</code> instance for the specified id
   * whether <code>user</code> is <code>null</code>. If <code>user</code> is not
   * <code>null</code>, it returns <code>null</code>.
   * 
   * @param {string} id the identifier associated with the user to check.
   * @param {UserV3} user an app user, or <code>null</code>.
   * 
   * @return {UsersException} a new <code>UsersException</code> instance, or
   *                          <code>null</code>.
   */
  private getNotFoundError(id:string, user:UserV3):UsersException {
    let error:UsersException = null;
    if(!user) {
      error = UsersExceptionBuilder.build(
        `Invalid user ID: ${id}.`, HttpStatusCode.NOT_FOUND
      );
    }
    return error;
  }
}