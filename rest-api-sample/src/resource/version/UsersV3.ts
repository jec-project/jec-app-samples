import {RootPath} from "jec-jars";

/**
 * The third version of the <code>users</code> resource.
 */
@RootPath({
  path: "/sample.app",
  ref: "users-v3",
  version: {
    prefix: "v",
    major: 3,
    minor: 0
  }
})
export class UsersV3 {}