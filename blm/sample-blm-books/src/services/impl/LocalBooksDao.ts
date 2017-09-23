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
import {BooksDao} from "../BooksDao";
import * as fs from "fs";

const FILE:string = process.cwd() + "/workspace/sample-blm-data/files/books.json";

/**
 * A BooksDao interface implementation that provides data from a local JSON
 * file.
 */
export class LocalBooksDao implements BooksDao {

  /**
   * @inheritDoc
   */
  public getBooks(result:(data:any, err:any)=>void):void {
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
  public findBooks(token:string, result:(data:any, err:any)=>void):void {
    fs.readFile(
      FILE,
      EncodingFormat.UTF8,
      (err:NodeJS.ErrnoException, data:string)=>{
        let found:any[] = [];
        let booksData:any[] = JSON.parse(data);
        let book:any = null;
        let fields:string = null;
        let len:number = booksData.length;
        while(len--) {
            book = booksData[len];
            fields = book.title + book.summary + book.author.name;
            if(fields.toLowerCase().indexOf(token) !== -1) found.push(book);
        }
        result(JSON.stringify(found), err);
      }
    );
  }
}