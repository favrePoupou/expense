/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Email } from '../../models/Email';
import { UserRole } from '../../models/UserRole';
import { UserOrganisation } from '../../models/UserOrganisation';
import { Expense } from '../../models/Expense';
import { UserSetting } from '../../models/UserSetting';
import { Currency } from '../../models/Currency';
import { ExpenseCode } from '../../models/ExpenseCode';
import { Image } from '../../models/Image';
import { Client } from '../../models/Client';
import { Address } from '../../models/Address';
import { Country } from '../../models/Country';
import { Province } from '../../models/Province';
import { City } from '../../models/City';
import { UserClientHistory } from '../../models/UserClientHistory';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Email: Email,
    UserRole: UserRole,
    UserOrganisation: UserOrganisation,
    Expense: Expense,
    UserSetting: UserSetting,
    Currency: Currency,
    ExpenseCode: ExpenseCode,
    Image: Image,
    Client: Client,
    Address: Address,
    Country: Country,
    Province: Province,
    City: City,
    UserClientHistory: UserClientHistory,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
