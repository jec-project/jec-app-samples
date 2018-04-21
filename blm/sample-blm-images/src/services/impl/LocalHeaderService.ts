//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import {HttpHeader} from "jec-commons";
import {Injectable, ScopeType} from "jec-jdi";
import {HeaderService} from "../HeaderService";
import {HttpResponse} from "jec-exchange";

/**
 * A LocalHeaderService interface implementation that provides HTTP headers for
 * development environment.
 */
@Injectable({
  type: HeaderService,
  retention: ["DEV"],
  scope: ScopeType.APPLICATION
})
export class LocalHeaderService implements HeaderService {

  /**
   * The allowed origin for the development environment.
   */
  public readonly ALLOWED_ORIGIN:string = "http://localhost:3001";

  /**
   * The cache control rule for the development environment.
   */
  public readonly CACHE_CONTROL_RULE:string = "public, max-age=31536000";

  /**
   * @inheritDoc
   */
  public setHeaders(res:HttpResponse):void {
    res.setHeader(
      HttpHeader.ACCESS_CONTROL_ALLOW_ORIGIN, this.ALLOWED_ORIGIN
    );
    res.setHeader(
      HttpHeader.CACHE_CONTROL, this.CACHE_CONTROL_RULE
    );
  }
}