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