import { ClientService } from './../../app/services/client.service';
import { Component, Input, EventEmitter } from '@angular/core';
import { appRoutingProviders } from './../../app/app.routing';
import { LoopBackConfig, LoopBackAuth } from '../../app/shared/sdk/index';
import { NgbModule, NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientApi } from './../../app/shared/sdk/services';
import { User, AccessToken } from './../../app/shared/sdk/models';
import { ModifyClientComponent } from './../../app/modify-client/modify-client.component';
//import { ModifyClientComponent } from './../../app/services/index';

@Component({
  selector: 'client',
  templateUrl: '../../pages/client/client.html',
  styleUrls: ['../../pages/client/client.scss']  
})

export class ClientPage {
  clientValues : any =[];
  organisationId: any;
  userId: any;
  numberOfClient: boolean;

  constructor(
    private _clientApi: ClientApi,
    private _loopbackAuth: LoopBackAuth,
    private modalService: NgbModal ,
    private _clientService: ClientService
  ) { }


  clientDefaultValues(){
  this._clientService.getClient((data)=>{
    this.clientValues = data;
    console.log('OOOOOO', this.clientValues);
  });
}


  afterAddClient(){
    console.log('afterAddClient is CALLED');
    this.clientDefaultValues(); 
  }

  reloadPage(){
    location.reload();
  }

  onDelete(event) {
    this.userId = event.id;
    this._clientApi.deleteById(this.userId,function(){

    }).subscribe((data) =>{
      this.clientDefaultValues();
    })
  } 


  // to pass this event through components use eventEmitter -> https://toddmotto.com/component-events-event-emitter-output-angular-2
  // https://angular.io/api/core/EventEmitter ====>  https://stackoverflow.com/questions/37587732/how-to-call-another-components-function-in-angular2
  
  changeClient(event){
    console.log('EVENT', event);
    const modalRef = this.modalService.open(ModifyClientComponent); 
    modalRef.componentInstance.eventId = event.id;  // pass data through ng-bootstrap modal
  }
  
  ngOnInit(){
    this.clientDefaultValues();
  }
}

