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
import {BooksDao} from "../../../src/services/BooksDao";
import * as fs from "fs";

/**
 * A BooksDao interface implementation that provides data from a local JSON
 * file.
 */
export class MockBooksDao implements BooksDao {

    public static readonly BOOKS:any[] = [
      {
        id: "978-0142427507",
        author: {
          id: 0,
          name: "L Frank Baum"
        },
        title: "The Wizard of Oz",
        cover: "the-wizard-of-oz.jpg",
        summary: "Dorothy thinks she's lost forever when a tornado whirls her and her dog, Toto, into a magical world. To get home, she must find the wonderful wizard in the Emerald City of Oz. On the way she meets the Scarecrow, the Tin Woodman and the Cowardly Lion. But the Wicked Witch of the West has her own plans for the new arrival... will Dorothy ever see Kansas again?"
      },
      {
        id: "978-0679720201",
        author: {
          id: 1,
          name: "Albert Camus"
        },
        title: "The Stranger",
        cover: "the-stranger.jpg",
        summary: "Through the story of an ordinary man unwittingly drawn into a senseless murder on an Algerian beach, Camus explored what he termed \"the nakedness of man faced with the absurd.\""
      }
    ];

  /**
   * @inheritDoc
   */
  public getBooks(result:(data:any, err:any)=>void):void {
    result(MockBooksDao.BOOKS, null);
  }

  /**
   * @inheritDoc
   */
  public findBooks(token:string, result:(data:any, err:any)=>void):void {
  }
}