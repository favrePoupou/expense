import { Component, OnInit } from '@angular/core';
import { ClientApi } from './../../app/shared/sdk/services';
import { Client, AccessToken } from './../../app/shared/sdk/models';
import { ClientPage } from './../../pages/client/client';
import { appRoutingProviders } from './../../app/app.routing';
import { LoopBackConfig, LoopBackAuth } from './../../../../client/src/app/shared/sdk';


@Component({
  selector: 'test',
  templateUrl: '../../pages/test/test.html',
  styleUrls: ['../../pages/test/test.scss']
})
export class TestComponent implements OnInit {

  
  ngOnInit() {
   
  }

}
