import {RootPath} from "jec-jars";

/**
 * The second version of the <code>users</code> resource.
 */
@RootPath({
  path: "/sample.app",
  ref: "users-v2",
  version: {
    prefix: "v",
    major: 2,
    minor: 0
  }
})
export class UsersV2 {}