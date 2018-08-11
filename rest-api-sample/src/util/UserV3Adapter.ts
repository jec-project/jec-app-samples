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
import {UserV3Factory} from "./UserV3Factory";

/**
 * An adapter that turns <code>UserConfig</code> objects into
 * <code>UserV3</code> instances.
 */
export class UserV3Adapter {

  /**
   * Turns the specified array of <code>UserConfig</code> objects into
   * an array of <code>UserV3</code> instances, compatible with the app API.
   * 
   * @param {Array<UserConfig>} config the array of <code>UserConfig</code>
   *                                   objects to adapt.
   * @return {Array<UserV3>} an array of <code>UserV3</code> instances.
   */
  public adapt(config:UserConfig[]):UserV3[] {
    const resut:UserV3[] = new Array<UserV3>();
    config.forEach(element => {
      resut.push(UserV3Factory.create(element))
    });
    return resut;
  }
}