/* tslint:disable */
import {
  Expense
} from '../index';

declare var Object: any;
export interface ImageInterface {
  "id"?: any;
  "expenseId"?: any;
  expense?: Expense;
}

export class Image implements ImageInterface {
  "id": any;
  "expenseId": any;
  expense: Expense;
  constructor(data?: ImageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Image`.
   */
  public static getModelName() {
    return "Image";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Image for dynamic purposes.
  **/
  public static factory(data: ImageInterface): Image{
    return new Image(data);
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
      name: 'Image',
      plural: 'images',
      path: 'images',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "expenseId": {
          name: 'expenseId',
          type: 'any'
        },
      },
      relations: {
        expense: {
          name: 'expense',
          type: 'Expense',
          model: 'Expense'
        },
      }
    }
  }
}
