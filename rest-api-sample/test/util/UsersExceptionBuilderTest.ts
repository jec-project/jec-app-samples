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
import { HttpStatusCode } from "jec-commons";
import { expect } from "chai";
import { UsersExceptionBuilder } from "../../src/util/UsersExceptionBuilder";
import { UsersException } from "../../src/exception/UsersException";

@TestSuite({
  description: "Test the UsersExceptionBuilder class methods"
})
export class UsersExceptionBuilderTest {

  private readonly ID:string = "invalid-id";

  private readonly STATUS_CODE:HttpStatusCode = HttpStatusCode.NOT_FOUND;

  @Test({
    description: "should return an instance of UsersException class"
  })
  public buildTest():void {
    const error:any = UsersExceptionBuilder.build(this.ID, this.STATUS_CODE);
    expect(error).to.be.an.instanceOf(UsersException);
  }
  
  @Test({
    description: "should return a UsersException instance with the specified error message"
  })
  public errorMessageTest():void {
    const error:any = UsersExceptionBuilder.build(this.ID, this.STATUS_CODE);
    expect(error.message).to.equals(this.ID);
  }
  
  @Test({
    description: "should return a UsersException instance with the correct HTTP code"
  })
  public errorCodeTest():void {
    const error:any = UsersExceptionBuilder.build(this.ID, this.STATUS_CODE);
    expect(error.errorCode).to.equals(HttpStatusCode.NOT_FOUND);
  }
}
