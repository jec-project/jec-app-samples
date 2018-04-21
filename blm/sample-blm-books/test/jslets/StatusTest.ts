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
import { HttpJslet, JsletContext, HttpRequest, HttpResponse } from "jec-exchange";
import { JsletContextMockBuilder } from "jec-exchange-mock";
import { ContainerContext } from "jec-commons";
import { expect } from "chai";
import { Status } from "../../src/jslets/Status";


@TestSuite({
  description: "Test the Status class methods"
})
export class StatusTest {

  public jslet:HttpJslet = null;

  @Before()
  public initTest():void {
    this.jslet = new Status();
  }

  @After()
  public resetTest():void {
    this.jslet = null;
  }

  @Test({
    description: "should return the status info as specified by the associated JsletContext instance"
  })
  public doGetTest(@Async done:Function):void {
    const contextMock:JsletContext = 
          JsletContextMockBuilder.create().statusInfo({ info: "info" }).build();
    this.jslet.setContext(contextMock);
    this.jslet.doGet(
      null,
      null, 
      (req:HttpRequest, res:HttpResponse, data:any)=>{
        expect(data).to.equals(contextMock.getStatusInfo());
        done();
      }
    );
  }
}