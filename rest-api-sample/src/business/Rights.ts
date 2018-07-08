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
 * Defines the access rights to use when creating access rules.
 */
export enum Rights {

  /**
   * Specifies that no right is defined.
   */
  NONE = -1,

  /**
   * Specifies the right to open and copy folders or files as read-only. 
   */
  READ = 0,

  /**
   * Specifies the right to create folders and files, and to add or remove data
   * from files.
   */
  WRITE = 1,

  /**
   * Specifies the right to delete a folder or file.
   */
  DELETE = 2
}