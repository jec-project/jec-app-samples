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
import { UsersException } from "../../src/exception/UsersException";
import { HttpStatusCode } from "jec-commons";

@TestSuite({
  description: "Test the UsersException class methods"
})
export class UsersExceptionTest {

  private readonly MESSAGE:string = "error message";

  private readonly ERROR_CODE:HttpStatusCode = HttpStatusCode.OK;

  public error:UsersException = null;

  @Before()
  public initTest():void {
    this.error = new UsersException(this.MESSAGE, this.ERROR_CODE);
  }

  @After()
  public resetTest():void {
    this.error = null;
  }

  @Test({
    description: "should return the same message as passed in the constructor parameters"
  })
  public messageTest():void {
    expect(this.error.message).to.equals(this.MESSAGE);
  }
  
  @Test({
    description: "should return the same error code as passed in the constructor parameters"
  })
  public errorCodeTest():void {
    expect(this.error.errorCode).to.equals(this.ERROR_CODE);
  }
}