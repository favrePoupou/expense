/* tslint:disable */
import {
  User,
  Currency,
  ExpenseCode,
  Image
} from '../index';

declare var Object: any;
export interface ExpenseInterface {
  "expenseDate": Date;
  "amountOfExpense": number;
  "id"?: any;
  "userId"?: any;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "currencyId"?: any;
  "expenseCodeId"?: any;
  user?: User;
  currency?: Currency;
  expenseCode?: ExpenseCode;
  images?: Image;
}

export class Expense implements ExpenseInterface {
  "expenseDate": Date;
  "amountOfExpense": number;
  "id": any;
  "userId": any;
  "createdAt": Date;
  "updatedAt": Date;
  "currencyId": any;
  "expenseCodeId": any;
  user: User;
  currency: Currency;
  expenseCode: ExpenseCode;
  images: Image;
  constructor(data?: ExpenseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Expense`.
   */
  public static getModelName() {
    return "Expense";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Expense for dynamic purposes.
  **/
  public static factory(data: ExpenseInterface): Expense{
    return new Expense(data);
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
      name: 'Expense',
      plural: 'expenses',
      path: 'expenses',
      properties: {
        "expenseDate": {
          name: 'expenseDate',
          type: 'Date'
        },
        "amountOfExpense": {
          name: 'amountOfExpense',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "userId": {
          name: 'userId',
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
        "currencyId": {
          name: 'currencyId',
          type: 'any'
        },
        "expenseCodeId": {
          name: 'expenseCodeId',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
        currency: {
          name: 'currency',
          type: 'Currency',
          model: 'Currency'
        },
        expenseCode: {
          name: 'expenseCode',
          type: 'ExpenseCode',
          model: 'ExpenseCode'
        },
        images: {
          name: 'images',
          type: 'Image',
          model: 'Image'
        },
      }
    }
  }
}
