import { Component } from '@angular/core';
import { LoopBackConfig } from './shared/sdk/index';
import { SDKBrowserModule } from './../app/shared/sdk/index';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Administration Cervo Expense';
  constructor() {
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
  }

}
