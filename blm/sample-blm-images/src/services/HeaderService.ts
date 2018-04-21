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

import {Interface} from "jec-commons";
import {HttpResponse} from "jec-exchange";

/**
 * A convenient interface that exposes the API to add HTTP header fields to
 * static resources.
 */
export interface HeaderService {

  /**
   * Decorates the specified HTTP response with custom HTTP header fields.
   */
  setHeaders(res:HttpResponse):void;
}

/*
 * BooksDao interface declaration.
 */
export const HeaderService:Interface = Interface("services.HeaderService");