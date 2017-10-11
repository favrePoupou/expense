/* tslint:disable */
import {
  Expense
} from '../index';

declare var Object: any;
export interface CurrencyInterface {
  "name": string;
  "id"?: any;
  expenses?: Expense[];
}

export class Currency implements CurrencyInterface {
  "name": string;
  "id": any;
  expenses: Expense[];
  constructor(data?: CurrencyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Currency`.
   */
  public static getModelName() {
    return "Currency";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Currency for dynamic purposes.
  **/
  public static factory(data: CurrencyInterface): Currency{
    return new Currency(data);
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
      name: 'Currency',
      plural: 'currencies',
      path: 'currencies',
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
        expenses: {
          name: 'expenses',
          type: 'Expense[]',
          model: 'Expense'
        },
      }
    }
  }
}
