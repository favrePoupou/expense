/* tslint:disable */
import {
  Address,
  Country,
  City
} from '../index';

declare var Object: any;
export interface ProvinceInterface {
  "name": string;
  "abbreviation": string;
  "id"?: any;
  "countryId"?: any;
  addresses?: Address[];
  country?: Country;
  cities?: City[];
}

export class Province implements ProvinceInterface {
  "name": string;
  "abbreviation": string;
  "id": any;
  "countryId": any;
  addresses: Address[];
  country: Country;
  cities: City[];
  constructor(data?: ProvinceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Province`.
   */
  public static getModelName() {
    return "Province";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Province for dynamic purposes.
  **/
  public static factory(data: ProvinceInterface): Province{
    return new Province(data);
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
      name: 'Province',
      plural: 'provinces',
      path: 'provinces',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "abbreviation": {
          name: 'abbreviation',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "countryId": {
          name: 'countryId',
          type: 'any'
        },
      },
      relations: {
        addresses: {
          name: 'addresses',
          type: 'Address[]',
          model: 'Address'
        },
        country: {
          name: 'country',
          type: 'Country',
          model: 'Country'
        },
        cities: {
          name: 'cities',
          type: 'City[]',
          model: 'City'
        },
      }
    }
  }
}
