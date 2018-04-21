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
import { expect } from "chai";
import { Books } from "../../src/resources/Books";
import { BooksDao } from "../../src/services/BooksDao";
import { MockBooksDao } from "../../src/services/impl/MockBooksDao";

@TestSuite({
  description: "Test the Books class methods"
})
export class BooksTest {

  public books:Books = null;
  public booksDao:BooksDao = null;

  @Before()
  public initTest():void {
    this.books = new Books();
    this.booksDao = new MockBooksDao();
    this.books.dao = this.booksDao;
  }

  @After()
  public resetTest():void {
    this.books.dao = null;
    this.books = null;
    this.booksDao = null;
  }

  @Test({
    description: "should return the complete list of books defined in the Mock object"
  })
  public getBooksTest(@Async done:Function):void {
    this.books.getBooks((data:any, err:any)=>{
      expect(data).to.equals(MockBooksDao.BOOKS);
      done();
    });
  }
}