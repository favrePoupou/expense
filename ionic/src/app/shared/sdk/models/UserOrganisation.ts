/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface UserOrganisationInterface {
  "organisationName"?: string;
  "id"?: any;
  users?: User[];
}

export class UserOrganisation implements UserOrganisationInterface {
  "organisationName": string;
  "id": any;
  users: User[];
  constructor(data?: UserOrganisationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserOrganisation`.
   */
  public static getModelName() {
    return "UserOrganisation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserOrganisation for dynamic purposes.
  **/
  public static factory(data: UserOrganisationInterface): UserOrganisation{
    return new UserOrganisation(data);
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
      name: 'UserOrganisation',
      plural: 'userOrganisations',
      path: 'userOrganisations',
      properties: {
        "organisationName": {
          name: 'organisationName',
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
