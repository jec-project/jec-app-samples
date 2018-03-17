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

import {EncodingFormat} from "jec-commons";
import {Injectable} from "jec-jdi";
import {BooksDao} from "../BooksDao";

const FILE:string = process.cwd() + "/workspace/sample-blm-data/files/books.json";

/**
 * A BooksDao interface implementation that provides data from a MongoDB data
 * base.
 */
/*@Injectable({
  type: BooksDao,
  retention: ["PROD"]
})*/
export class MongoBooksDao implements BooksDao {

  /**
   * @inheritDoc
   */
  public getBooks(result:(data:any, err:any)=>void):void {
    result(null, null);
  }

  /**
   * @inheritDoc
   */
  public findBooks(token:string, result:(data:any, err:any)=>void):void {
    result(null, null);
  }
}