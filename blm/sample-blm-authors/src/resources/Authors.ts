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

import {ResourcePath, GET, PathParam, Exit, RootPathRefs, QueryParam} from "jec-jars";
import {AuthorsDao} from "../services/AuthorsDao";
import {Inject} from "jec-jdi";

/**
 * A sample service that provide access to authors information.
 */
@ResourcePath({
    path:"/authors",
    crossDomainPolicy: "http://localhost:3001",
    produces: "application/json"
})
export class Authors {

    @Inject({ type: AuthorsDao })
    private _dao:AuthorsDao;

    @GET()
    public getAuthors(@Exit exit:Function):void {
      this._dao.getAuthors((data:any, err:any)=>{
        exit(data, err);
      });
    }
    
    @GET({
        route: "/:authorId"
    })
    public getAuthorById(@PathParam authorId:string,
                         @Exit exit:Function):void {
      this._dao.getAuthorById(authorId, (data:any, err:any)=>{
        exit(data, err);
      });
    }
}
