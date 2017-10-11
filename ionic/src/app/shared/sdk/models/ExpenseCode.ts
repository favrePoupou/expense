/* tslint:disable */
import {
  Expense
} from '../index';

declare var Object: any;
export interface ExpenseCodeInterface {
  "codeNumber": number;
  "codeName": string;
  "id"?: any;
  expenses?: Expense[];
}

export class ExpenseCode implements ExpenseCodeInterface {
  "codeNumber": number;
  "codeName": string;
  "id": any;
  expenses: Expense[];
  constructor(data?: ExpenseCodeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ExpenseCode`.
   */
  public static getModelName() {
    return "ExpenseCode";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ExpenseCode for dynamic purposes.
  **/
  public static factory(data: ExpenseCodeInterface): ExpenseCode{
    return new ExpenseCode(data);
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
      name: 'ExpenseCode',
      plural: 'expenseCodes',
      path: 'expenseCodes',
      properties: {
        "codeNumber": {
          name: 'codeNumber',
          type: 'number'
        },
        "codeName": {
          name: 'codeName',
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
