/* tslint:disable */
import {
  UserRole,
  UserOrganisation,
  Expense,
  UserSetting,
  Client
} from '../index';

declare var Object: any;
export interface UserInterface {
  "firstName": string;
  "lastName": string;
  "email": string;
  "temp_password"?: string;
  "userStatus"?: string;
  "telephone"?: string;
  "userOrganisationId"?: any;
  "userSpeciality"?: string;
  "userTitle"?: string;
  "realm"?: string;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "userRoleId"?: any;
  "clientId"?: any;
  "password"?: string;
  userRole?: UserRole;
  userOrganisation?: UserOrganisation;
  expenses?: Expense[];
  userSettings?: UserSetting;
  userClients?: Client[];
  clients?: Client[];
  accessTokens?: any[];
}

export class User implements UserInterface {
  "firstName": string;
  "lastName": string;
  "email": string;
  "temp_password": string;
  "userStatus": string;
  "telephone": string;
  "userOrganisationId": any;
  "userSpeciality": string;
  "userTitle": string;
  "realm": string;
  "username": string;
  "emailVerified": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  "userRoleId": any;
  "clientId": any;
  "password": string;
  userRole: UserRole;
  userOrganisation: UserOrganisation;
  expenses: Expense[];
  userSettings: UserSetting;
  userClients: Client[];
  clients: Client[];
  accessTokens: any[];
  constructor(data?: UserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `User`.
   */
  public static getModelName() {
    return "User";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of User for dynamic purposes.
  **/
  public static factory(data: UserInterface): User{
    return new User(data);
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
      name: 'User',
      plural: 'users',
      path: 'users',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "temp_password": {
          name: 'temp_password',
          type: 'string'
        },
        "userStatus": {
          name: 'userStatus',
          type: 'string'
        },
        "telephone": {
          name: 'telephone',
          type: 'string'
        },
        "userOrganisationId": {
          name: 'userOrganisationId',
          type: 'any'
        },
        "userSpeciality": {
          name: 'userSpeciality',
          type: 'string'
        },
        "userTitle": {
          name: 'userTitle',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "userRoleId": {
          name: 'userRoleId',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        userRole: {
          name: 'userRole',
          type: 'UserRole',
          model: 'UserRole'
        },
        userOrganisation: {
          name: 'userOrganisation',
          type: 'UserOrganisation',
          model: 'UserOrganisation'
        },
        expenses: {
          name: 'expenses',
          type: 'Expense[]',
          model: 'Expense'
        },
        userSettings: {
          name: 'userSettings',
          type: 'UserSetting',
          model: 'UserSetting'
        },
        userClients: {
          name: 'userClients',
          type: 'Client[]',
          model: 'Client'
        },
        clients: {
          name: 'clients',
          type: 'Client[]',
          model: 'Client'
        },
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
