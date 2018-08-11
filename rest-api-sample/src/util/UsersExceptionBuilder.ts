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

import {HttpStatusCode} from "jec-commons";
import {UsersException} from "../exception/UsersException";

/**
 * A static builder for creating <code>UserException</code> instances.
 */
export class UsersExceptionBuilder {

  /**
   * Creates and returns a new <code>UserException</code> instance.
   *
   * @param {string} message the message associated with the new error.
   * @param {HttpStatusCode} errorCode the error code associated with the new
   *                                   error.
   * @param {UserException} errorCode <code>UserException</code> instance.
   */
  public static build(message:string, errorCode:HttpStatusCode):UsersException {
    const error:UsersException = new UsersException(message, errorCode);
    return error;
  }
}