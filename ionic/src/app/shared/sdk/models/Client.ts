/* tslint:disable */
import {
  User,
  Address
} from '../index';

declare var Object: any;
export interface ClientInterface {
  "name": string;
  "userStatus": string;
  "location"?: string;
  "id"?: any;
  "userId"?: any;
  clientUsers?: User[];
  addresses?: Address;
  users?: User[];
}

export class Client implements ClientInterface {
  "name": string;
  "userStatus": string;
  "location": string;
  "id": any;
  "userId": any;
  clientUsers: User[];
  addresses: Address;
  users: User[];
  constructor(data?: ClientInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Client`.
   */
  public static getModelName() {
    return "Client";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Client for dynamic purposes.
  **/
  public static factory(data: ClientInterface): Client{
    return new Client(data);
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
      name: 'Client',
      plural: 'clients',
      path: 'clients',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "userStatus": {
          name: 'userStatus',
          type: 'string'
        },
        "location": {
          name: 'location',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "userId": {
          name: 'userId',
          type: 'any'
        },
      },
      relations: {
        clientUsers: {
          name: 'clientUsers',
          type: 'User[]',
          model: 'User'
        },
        addresses: {
          name: 'addresses',
          type: 'Address',
          model: 'Address'
        },
        users: {
          name: 'users',
          type: 'User[]',
          model: 'User'
        },
      }
    }
  }
}
