/* tslint:disable */
import {
  Address,
  Province
} from '../index';

declare var Object: any;
export interface CountryInterface {
  "name": string;
  "id"?: any;
  addresses?: Address[];
  provinces?: Province[];
}

export class Country implements CountryInterface {
  "name": string;
  "id": any;
  addresses: Address[];
  provinces: Province[];
  constructor(data?: CountryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Country`.
   */
  public static getModelName() {
    return "Country";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Country for dynamic purposes.
  **/
  public static factory(data: CountryInterface): Country{
    return new Country(data);
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
      name: 'Country',
      plural: 'countries',
      path: 'countries',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        addresses: {
          name: 'addresses',
          type: 'Address[]',
          model: 'Address'
        },
        provinces: {
          name: 'provinces',
          type: 'Province[]',
          model: 'Province'
        },
      }
    }
  }
}
