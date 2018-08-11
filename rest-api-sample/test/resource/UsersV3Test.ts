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

import { TestSuite, Test, Before, After, Async } from "jec-juta";
import { HttpStatusCode } from "jec-commons";
import { expect } from "chai";
import { UsersV3 } from "../../src/resource/UsersV3";
import { MockUserDao } from "../../src/service/impl/MockUserDao";
import { USERS_MODEL } from "../../src/util/MockModel";
import { UserConfig } from "../../src/util/UserConfig";
import { UserV3 } from "../../src/business/UserV3";
import { UsersException } from "../../src/exception/UsersException";

@TestSuite({
  description: "Test the UsersV3 class methods"
})
export class UsersV3Test {

  public users:UsersV3 = null;

  @Before()
  public initTest():void {
    this.users = new UsersV3();
    this.users.dao = new MockUserDao();
  }

  @After()
  public resetTest():void {
    this.users = null;
  }

  @Test({
    description: "should return the complete list of user registered in the app"
  })
  public getUsersTest(@Async done:Function):void {
    this.users.getUsers((data:any, err:any)=>{
      expect(data.length).to.equals(USERS_MODEL.length);
      done();
    });
  }

  @Test({
    description: "should return the user with the specidied ID"
  })
  public getUserTest(@Async done:Function):void {
    const userConfig: UserConfig = USERS_MODEL[0];
    this.users.getUser(userConfig.id, (user:any, err:any)=>{
      expect(user.id).to.equals(userConfig.id)
      done();
    });
  }

  @Test({
    description: "should return an instance of UserV3 class"
  })
  public getUserTypeTest(@Async done:Function):void {
    const userConfig: UserConfig = USERS_MODEL[1];
    this.users.getUser(userConfig.id, (user:any, err:any)=>{
      expect(user).to.be.an.instanceOf(UserV3);
      done();
    });
  }

  @Test({
    description: "should return no value when user does not exists"
  })
  public getUserUndefinedTest(@Async done:Function):void {
    this.users.getUser("invalid-id", (user:any, err:any)=>{
      expect(user).to.be.undefined;
      done();
    });
  }

  @Test({
    description: "should return an exception when user does not exists"
  })
  public getUserErrorTest(@Async done:Function):void {
    this.users.getUser("invalid-id", (user:any, err:any)=>{
      expect(err).to.be.an.instanceOf(UsersException);
      done();
    });
  }

  @Test({
    description: "should return the correct HTTP code when user does not exists"
  })
  public getUserErrorCodeTest(@Async done:Function):void {
    this.users.getUser("invalid-id", (user:any, err:any, status:number)=>{
      expect(status).to.equals(HttpStatusCode.NOT_FOUND);
      done();
    });
  }
}
