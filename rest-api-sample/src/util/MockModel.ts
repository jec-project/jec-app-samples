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

import {Rights} from "../business/Rights";
import {UserConfig} from "./UserConfig";

/**
 * The model used to create mocked users.
 */
export const USERS_MODEL:UserConfig[] = [
  {
    id: "809d703f-f49a-4f8a-a03f-ef3eebb87ce1",
    firstname: "Douglas",
    lastname: "King",
    email: "admin@domain.com",
    rights: Rights.DELETE
  },
  {
    id: "dc098b25-9ef1-438c-88d7-16ec83db8717",
    firstname: "John",
    lastname: "DOE",
    email: "jdoe@domain.com",
    rights: Rights.READ
  }
];