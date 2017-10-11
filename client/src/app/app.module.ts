import { SDKBrowserModule } from './../app/shared/sdk/index';
import { LoopBackConfig, LoggerService, LoopBackAuth } from './../app/shared/sdk';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './services/auth-guard.service';
import { DatepickerModule } from 'angular2-material-datepicker';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './directives/index';
import { AlertService } from './services/index';
import { ClientService } from './services/client.service';
import { EmployeeService } from './services/employee.service';


import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { ClientPage } from './../pages/client/client';
import { ProjectPage } from './../pages/project/project';
import { HomePage } from './../pages/home/home';
import { HistoryPage } from './../pages/history/history';
import { ExpensePage } from './../pages/expense/expense';
import { EmployePage } from './../pages/employee/employee';
import { ResetPage } from './../pages/reset/reset';
import { AddClientComponent } from './add-client/add-client.component';
import { ResetFormPage } from './../pages/resetform/resetform';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ModifyClientComponent } from './modify-client/modify-client.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import { TestComponent } from './../pages/test/test';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,    
    RegisterPage,
    ClientPage,
    EmployePage,
    HomePage,
    ExpensePage,
    HistoryPage,
    ProjectPage,
    AddClientComponent,
    ResetPage,
    ResetFormPage,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AlertComponent,
    ModifyClientComponent,
    ModifyEmployeeComponent,
    TestComponent
  ],
  entryComponents: [AddClientComponent, ModifyClientComponent, ModifyEmployeeComponent],
  imports: [
    BrowserModule,   
    FormsModule,
    DatepickerModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    routing,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule.forRoot(),
    SDKBrowserModule.forRoot()
  ],
  providers: [AuthGuard, AlertService, ClientService, ClientPage, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
