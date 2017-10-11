import { Subscription } from 'rxjs/Subscription';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable, Component, Inject, OnInit, Input, EventEmitter, forwardRef } from '@angular/core';
import { LoopBackConfig, LoopBackAuth } from './../../../../client/src/app/shared/sdk';
import { appRoutingProviders } from './../../app/app.routing';
import { ClientApi } from './../../app/shared/sdk/services';
import { ClientPage } from './../../pages/client/client';



@Injectable()
export class ClientService {
  clientValues : any;
  constructor(
    private _clientApi: ClientApi,
    private _loopbackAuth: LoopBackAuth,
    //private _clientPage:ClientPage
   //@Injectable(forwardRef(() => ClientPage)) private _clientPage:ClientPage // Not possible to import component ClientPage
  ) { }


  getClient(callback :(data)=> void){   
    return this._clientApi.find({
      where:{
        userId:this._loopbackAuth.getCurrentUserId(),
        userStatus: 'Client'
      }
    }).subscribe((results)=>{
      console.log('DDDD',results);
      callback(results);
    })
  }

  getClientToModify(clientSelected, callback: (data) => void) {
    return this._clientApi.find({
      where: {
        id: clientSelected
      }
    })
      .subscribe(
      res => {
        console.log('getClientToModify', res);
        callback(res);
      }, err => {
        console.error(err);
      }
      );
  }

  updateClient(clientSelectedToModify, newName, newLocation) {
    this._clientApi.find({
      where: {
        id: clientSelectedToModify
      }
    })
      .subscribe(
      res => {
        this._clientApi.updateAttributes(clientSelectedToModify, {
          name: newName,
          location: newLocation,
          userStatus: "Client",
          userId: this._loopbackAuth.getCurrentUserId()
        }).subscribe(
          result => {
            console.log('RESULT', result);
            //this._clientPage.afterAddClient(); // the solution for refresh after update
          }
          )
      }
      )
  }

  ngOnInit() {

  }

}
