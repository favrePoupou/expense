import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { LoopBackConfig, LoopBackAuth } from './../../../../client/src/app/shared/sdk';
import { NgForm } from '@angular/forms';
import { appRoutingProviders } from './../../app/app.routing';
import { ClientApi } from './../../app/shared/sdk/services';
import { Client, AccessToken } from './../../app/shared/sdk/models';
import { ClientPage } from './../../pages/client/client';
import { AlertService } from './../../app/services/index';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})


export class AddClientComponent {
  clientname: any;
  showAddClient: boolean;
  clientlocation: any;
  formError: {
    clientName: boolean;
    clientLocation: boolean;
  };

  constructor(
    private _clientApi: ClientApi,
    private _router: Router,
    private _loopbackAuth: LoopBackAuth,
    private _clientPage: ClientPage,
    private alertService: AlertService
  ) { }


  openAddClientForm() {
    this.showAddClient = false;
  }

  closeAddClientForm() {
    this.showAddClient = true;
    this.resetError();
    this.alertService.clear();
  }


  validateClientForm() {
    var message = '';
    this.resetError();
    this.alertService.clear();
    if (!(this.clientname && this.clientname.length)) {
      this.formError.clientName = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(this.clientlocation && this.clientlocation.length)) {
      this.formError.clientLocation = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (this.formError.clientName || this.formError.clientLocation) {
      this.alertService.error(message);
    }
  }

  IsClientFormValid() {
    return !(this.formError.clientName || this.formError.clientLocation);
  };

  createClient(clientname, clientlocation) {
    this.alertService.clear();
    this.validateClientForm();
    if (this.IsClientFormValid()) {
      this._clientApi.create({
        name: clientname,
        userStatus: 'Client',
        userId: this._loopbackAuth.getCurrentUserId(),
        location: clientlocation
      }).subscribe((res) => {
        this.alertService.success('Votre client a bien été ajouté avec succès');
        this._clientPage.afterAddClient();
        setTimeout(() => {
          this.alertService.clear();
      }, 2000);
      })
      this.clearForm();
      this._router.navigate(['/home']);
    }


  }

  clearForm() {
    this.clientname = "";
    this.clientlocation = "";
  }

  resetError() {
    this.formError = {
      clientName: false,
      clientLocation: false
    }
  }

  closeModal() {
    //this._activeModal.close();
  }

  ngOnInit() {
    this.clearForm();
    this.closeAddClientForm();
    this.resetError();
  }

}