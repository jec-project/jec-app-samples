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

import {UserConfig} from "./UserConfig";
import {UserV3} from "../business/UserV3";

/**
 * A static factory that creates new <code>UserV3</code> instances, built from
 * <code>UserConfig</code> objects.
 */
export class UserV3Factory {

  /**
   * Builds and returns a new <code>UserV3</code> instance.
   * 
   * @param {UserConfig} config the config object used to init the new
   *                            <code>UserV3</code> instance.
   * @return {UserV3} a new <code>UserV3</code> instance.
   */
  public static create(config:UserConfig):UserV3 {
    const user:UserV3 = new UserV3(config.id);
    user.firstname = config.firstname;
    user.lastname = config.lastname;
    user.email = config.email;
    user.rights = config.rights;
    return user;
  }
}