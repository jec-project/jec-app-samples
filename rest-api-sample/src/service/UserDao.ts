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

import {Interface} from "jec-commons";
import {UsersException} from "../exception/UsersException";

/**
 * A convenient interface that exposes the API to access users data.
 */
export interface UserDao<T> {

  /**
   * Returns all registered users.
   * 
   * @param {Function} result the callback function that returns an array of all
   *                          users.
   */
  getUsers(result: (data:T[], err:UsersException) => void):void;

  /**
   * Returns the registered user with the specified ID.
   * 
   * @param {string} id the identifier for which to find a user.
   * @param {Function} result the callback function that returns the user with
   *                          the specified ID.
   */
  getUser(id:string, result: (data:T, err:UsersException) => void):void;
}

/*
 * UserDao interface declaration.
 */
export const UserDao:Interface = Interface("service.UserDao");