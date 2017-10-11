/* tslint:disable */
import {
  Client,
  Country,
  Province,
  City
} from '../index';

declare var Object: any;
export interface AddressInterface {
  "streetNumberName": string;
  "apartmentNumber"?: string;
  "code": string;
  "id"?: any;
  "clientId"?: any;
  "countryId"?: any;
  "provinceId"?: any;
  "cityId"?: any;
  client?: Client;
  country?: Country;
  province?: Province;
  city?: City;
}

export class Address implements AddressInterface {
  "streetNumberName": string;
  "apartmentNumber": string;
  "code": string;
  "id": any;
  "clientId": any;
  "countryId": any;
  "provinceId": any;
  "cityId": any;
  client: Client;
  country: Country;
  province: Province;
  city: City;
  constructor(data?: AddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Address`.
   */
  public static getModelName() {
    return "Address";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Address for dynamic purposes.
  **/
  public static factory(data: AddressInterface): Address{
    return new Address(data);
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
      name: 'Address',
      plural: 'addresses',
      path: 'addresses',
      properties: {
        "streetNumberName": {
          name: 'streetNumberName',
          type: 'string'
        },
        "apartmentNumber": {
          name: 'apartmentNumber',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "clientId": {
          name: 'clientId',
          type: 'any'
        },
        "countryId": {
          name: 'countryId',
          type: 'any'
        },
        "provinceId": {
          name: 'provinceId',
          type: 'any'
        },
        "cityId": {
          name: 'cityId',
          type: 'any'
        },
      },
      relations: {
        client: {
          name: 'client',
          type: 'Client',
          model: 'Client'
        },
        country: {
          name: 'country',
          type: 'Country',
          model: 'Country'
        },
        province: {
          name: 'province',
          type: 'Province',
          model: 'Province'
        },
        city: {
          name: 'city',
          type: 'City',
          model: 'City'
        },
      }
    }
  }
}
