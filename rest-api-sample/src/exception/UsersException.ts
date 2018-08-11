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

import {HttpStatusCode} from "jec-commons";

/**
 * The <code>UsersException</code> class represents an error thrown because  
 * of an error due to the users API invalid access.
 */
export class UsersException extends Error {

  /**
   * The error code associated with this exception.
   */
  public readonly errorCode:HttpStatusCode;

  /**
   * Creates a new <code>UsersException</code> instance.
   * 
   * @param {string} message a human-readable description of the error.
   * @param {HttpStatusCode} errorCode the error code associated with this
   *                                   exception.
   */
  constructor(message:string, errorCode:HttpStatusCode) {
    super(message);
    this.errorCode = errorCode;
  }
}