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
import { UserV3Adapter } from "../../src/util/UserV3Adapter";
import { USERS_MODEL } from "../../src/util/MockModel";
import { UserV3 } from "../../src/business/UserV3";
import { UserConfig } from "../../src/util/UserConfig";

@TestSuite({
  description: "Test the UserV3Adapter class methods"
})
export class UserV3AdapterTest {

  public adapter:UserV3Adapter = null;

  @Before()
  public initTest():void {
    this.adapter = new UserV3Adapter();
  }

  @After()
  public resetTest():void {
    this.adapter = null;
  }

  @Test({
    description: "should return an array of UserV3 instances"
  })
  public buildTypeTest():void {
    const addaptees:any = this.adapter.adapt(USERS_MODEL);
    expect(addaptees).to.be.an.array;
    addaptees.forEach((addaptee:any)=>{
      expect(addaptee).to.be.an.instanceOf(UserV3);
    });
  }
  
  @Test({
    description: "should return an array of UserV3 instances with the same size as the original model"
  })
  public buildNumTest():void {
    const addaptees:any = this.adapter.adapt(USERS_MODEL);
    expect(addaptees.length).to.equals(USERS_MODEL.length);
  }
  
  @Test({
    description: "should return an array of UserV3 instances with the same values as defined in the original model"
  })
  public buildValuesTest():void {
    const addaptees:UserV3[] = this.adapter.adapt(USERS_MODEL);
    addaptees.forEach((addaptee:UserV3, index:number)=>{
      const userConfig:UserConfig = USERS_MODEL[index];
      expect(addaptee.id).to.equals(userConfig.id);
      expect(addaptee.firstname).to.equals(userConfig.firstname);
      expect(addaptee.lastname).to.equals(userConfig.lastname);
      expect(addaptee.email).to.equals(userConfig.email);
      expect(addaptee.rights).to.equals(userConfig.rights);
    });
  }
}
