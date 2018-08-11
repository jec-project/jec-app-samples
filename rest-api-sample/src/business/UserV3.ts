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

import {UserV2} from "./UserV2";

/**
 * Represents a complex user with a unique GUID.
 */
export class UserV3 extends UserV2 {

  /**
   * Returns the user's unique identifier.
   */
  public readonly id:string = null;

  /**
   * Creates a new <code>UserV3</code> instance.
   * 
   * @param id the user's unique identifier.
   */
  constructor(id:string) {
    super();
    this.id = id;
  }
}