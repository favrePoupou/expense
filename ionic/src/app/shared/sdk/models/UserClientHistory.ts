/* tslint:disable */

declare var Object: any;
export interface UserClientHistoryInterface {
  "startDate"?: Date;
  "endDate"?: Date;
  "userId"?: string;
  "country"?: string;
  "id"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
}

export class UserClientHistory implements UserClientHistoryInterface {
  "startDate": Date;
  "endDate": Date;
  "userId": string;
  "country": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: UserClientHistoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserClientHistory`.
   */
  public static getModelName() {
    return "UserClientHistory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserClientHistory for dynamic purposes.
  **/
  public static factory(data: UserClientHistoryInterface): UserClientHistory{
    return new UserClientHistory(data);
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
      name: 'UserClientHistory',
      plural: 'userClientHistories',
      path: 'userClientHistories',
      properties: {
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "userId": {
          name: 'userId',
          type: 'string'
        },
        "country": {
          name: 'country',
          type: 'string'
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
      },
      relations: {
      }
    }
  }
}
