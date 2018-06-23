import {Rights} from "./Rights";

/**
 * Represents a basic user.
 */
export class User {

  /**
   * The user's name.
   */
  public name:string = null;
  
  /**
   * The user's access rights.
   */
  public rights:Rights = Rights.NONE;
}