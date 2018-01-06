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

import {AbstractBootstrapScript, Bootstrap} from "jec-commons";
import {DomainContainer} from "jec-glasscat-core";
import {SandcatBuilder} from "jec-sandcat";

/**
 * Runs Sandcat initialization script.
 */
@Bootstrap()
export class InitApp extends AbstractBootstrapScript {

  /**
   * @inheritDoc
   */
  public run(container:DomainContainer):void {
    new SandcatBuilder().build(container)
                        .process((err:any)=>{
                          if(err) {
                            throw new Error("Invalid JARS config: " + err);
                          }
                        });
  }
}