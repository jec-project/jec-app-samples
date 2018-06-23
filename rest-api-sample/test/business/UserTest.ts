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

import { TestSuite, Test, Before, After } from "jec-juta";
import { expect } from "chai";
import { User } from "../../src/business/User";
import { Rights } from "../../src/business/Rights";

@TestSuite({
  description: "Test the User class members"
})
export class UserTest {

  public user:User = null;

  @Before()
  public initTest():void {
    this.user = new User();
  }

  @After()
  public resetTest():void {
    this.user = null;
  }

  @Test({
    description: "'name' should be 'null' by default"
  })
  public getNameTest():void {
    expect(this.user.name).to.be.null;
  }
  
  @Test({
    description: "'rights' should be 'Rights.NONE' by default"
  })
  public getRightsTest():void {
    expect(this.user.rights).to.equal(Rights.NONE);
  }
}