/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface UserRoleInterface {
  "roleName": string;
  "id"?: any;
  users?: User[];
}

export class UserRole implements UserRoleInterface {
  "roleName": string;
  "id": any;
  users: User[];
  constructor(data?: UserRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserRole`.
   */
  public static getModelName() {
    return "UserRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserRole for dynamic purposes.
  **/
  public static factory(data: UserRoleInterface): UserRole{
    return new UserRole(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'UserRole',
      plural: 'userRoles',
      path: 'userRoles',
      properties: {
        "roleName": {
          name: 'roleName',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        users: {
          name: 'users',
          type: 'User[]',
          model: 'User'
        },
      }
    }
  }
}
