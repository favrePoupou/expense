/* tslint:disable */
import {
  Address,
  Province
} from '../index';

declare var Object: any;
export interface CityInterface {
  "name": string;
  "id"?: any;
  "provinceId"?: any;
  addresses?: Address[];
  province?: Province;
}

export class City implements CityInterface {
  "name": string;
  "id": any;
  "provinceId": any;
  addresses: Address[];
  province: Province;
  constructor(data?: CityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `City`.
   */
  public static getModelName() {
    return "City";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of City for dynamic purposes.
  **/
  public static factory(data: CityInterface): City{
    return new City(data);
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
      name: 'City',
      plural: 'cities',
      path: 'cities',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "provinceId": {
          name: 'provinceId',
          type: 'any'
        },
      },
      relations: {
        addresses: {
          name: 'addresses',
          type: 'Address[]',
          model: 'Address'
        },
        province: {
          name: 'province',
          type: 'Province',
          model: 'Province'
        },
      }
    }
  }
}
