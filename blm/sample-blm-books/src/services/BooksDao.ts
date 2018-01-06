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

/**
 * A convenient interface that exposes the API to access books data.
 */
export interface BooksDao {

  /**
   * Returns all books.
   */
  getBooks(result:(data:any, err:any)=>void):void;

  /**
   * Returns all books that match the specified token.
   * 
   * @param {string} token the token for which to find books.
   * @param {Function} result the callback function that returns an  array of
   *                          books.
   */
  findBooks(token:string, result:(data:any, err:any)=>void):void;
}