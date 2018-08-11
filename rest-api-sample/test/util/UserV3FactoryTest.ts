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

import { TestSuite, Test } from "jec-juta";
import { expect } from "chai";
import { UserV3Factory } from "../../src/util/UserV3Factory";
import { USERS_MODEL } from "../../src/util/MockModel";
import { UserV3 } from "../../src/business/UserV3";
import { UserConfig } from "../../src/util/UserConfig";

@TestSuite({
  description: "Test the UserV3Factory class methods"
})
export class UserV3FactoryTest {

  @Test({
    description: "should return a UserV3 instance"
  })
  public buildTypeTest():void {
    const instance:any = UserV3Factory.create(USERS_MODEL[0]);
    expect(instance).to.be.an.instanceOf(UserV3);
  }
  
  @Test({
    description: "should return a UserV3 instance with the same values as defined in the original model"
  })
  public buildValuesTest():void {
    const userConfig:UserConfig = USERS_MODEL[0];
    const instance:UserV3 = UserV3Factory.create(userConfig);
    expect(instance.id).to.equals(userConfig.id);
    expect(instance.firstname).to.equals(userConfig.firstname);
    expect(instance.lastname).to.equals(userConfig.lastname);
    expect(instance.email).to.equals(userConfig.email);
    expect(instance.rights).to.equals(userConfig.rights);
  }
}
