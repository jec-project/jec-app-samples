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
import {AuthorsDao} from "../AuthorsDao";
import * as fs from "fs";

const FILE:string = process.cwd() + "/workspace/sample-blm-data/files/authors.json";

/**
 * An AuthorsDao interface implementation that provides data from a local JSON
 * file.
 */
export class LocalAuthorsDao implements AuthorsDao {

  /**
   * @inheritDoc
   */
  public getAuthors(result:(data:any, err:any)=>void):void {
    fs.readFile(
      FILE,
      EncodingFormat.UTF8,
      (err:NodeJS.ErrnoException, data:string)=>{
        result(data, err);
      }
    );
  }

  /**
   * @inheritDoc
   */
  public getAuthorById(authorId:string, result:(data:any, err:any)=>void):void {
    fs.readFile(
      FILE,
      EncodingFormat.UTF8,
      (err:NodeJS.ErrnoException, data:string)=>{
        let authorsData:any[] = JSON.parse(data);
        let author:any = null;
        let found:any = null;
        let id:number = parseInt(authorId);
        let len:number = authorsData.length;
        while(len--) {
          author = authorsData[len];
          if(author.id === id) {
            found = author;
            break;
          }
        }
        result(JSON.stringify(found), err);
      }
    );
  }
}