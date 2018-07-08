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
import { UserV2 } from "../../src/business/UserV2";
import { Rights } from "../../src/business/Rights";

@TestSuite({
  description: "Test the UserV2 class members"
})
export class UserV2Test {

  public user:UserV2 = null;

  @Before()
  public initTest():void {
    this.user = new UserV2();
  }

  @After()
  public resetTest():void {
    this.user = null;
  }

  @Test({
    description: "'firstname' should be 'null' by default"
  })
  public getFirstameTest():void {
    expect(this.user.firstname).to.be.null;
  }
  
  @Test({
    description: "'lastname' should be 'null' by default"
  })
  public getLastnameTest():void {
    expect(this.user.lastname).to.be.null;
  }
  
  @Test({
    description: "'email' should be 'null' by default"
  })
  public getZmailTest():void {
    expect(this.user.email).to.be.null;
  }
  
  @Test({
    description: "'rights' should be 'Rights.NONE' by default"
  })
  public getRightsTest():void {
    expect(this.user.rights).to.equal(Rights.NONE);
  }
}