import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Inject, OnInit, Input, forwardRef } from '@angular/core';
import { LoopBackAuth } from './../../../../client/src/app/shared/sdk';
import { appRoutingProviders } from './../../app/app.routing';
import { ClientApi } from './../../app/shared/sdk/services';
import { ClientService } from './../services/client.service';
import { ClientPage } from './../../pages/client/client';



@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.component.html',
  styleUrls: ['./modify-client.component.css']
})
export class ModifyClientComponent implements OnInit {

  @Input() eventId; // retrieve this params from pages/client/client.ts as modal data

  clientSelected: any;
  clients: any;
  newName: any;
  newLocation: any;
  clientSelectedToModify: any;

  constructor(
    private _clientService: ClientService,
    private _loopbackAuth: LoopBackAuth,
    private _clientApi: ClientApi,
    public activeModal: NgbActiveModal,
    @Inject(forwardRef(() => ClientPage)) private _clientPage:ClientPage
  ) { }


  // get data from service ( ClientService ) and return it from callback

  getClientForUpdate() {
    this.clientSelected = this.eventId; // use of componentInstance to pass this share params
    this._clientService.getClientToModify(this.clientSelected, (data) => {
      this.clients = data;
    });
  }

  saveUpdateClient() {
    this.clientSelectedToModify = this.eventId;
    this.newName = this.clients[0].name;
    this.newLocation = this.clients[0].location;
    this._clientService.updateClient(this.clientSelectedToModify, this.newName, this.newLocation); 
    this._clientPage.afterAddClient();     
    this.activeModal.close();
    //this._clientPage.afterAddClient(); 
    this._clientPage.reloadPage(); // find the way to use function above => afterAddClient()
    
  }

  ngOnInit() {
    this.getClientForUpdate();
  }

}
