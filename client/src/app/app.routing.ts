import { SDKBrowserModule } from './../app/shared/sdk/index';
import { LoopBackConfig, LoggerService } from './../app/shared/sdk';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { HomePage } from './../pages/home/home';
import { ProjectPage } from './../pages/project/project';
import { HistoryPage } from './../pages/history/history';
import { ExpensePage } from './../pages/expense/expense';
import { EmployePage } from './../pages/employee/employee';
import { ClientPage } from './../pages/client/client';
import { ResetPage } from './../pages/reset/reset';
import { ResetFormPage } from './../pages/resetform/resetform';
import { AuthGuard } from './services/auth-guard.service';


const appRoutes: Routes = [
    { path:'', component: LoginPage },
    { path:'login', component: LoginPage },
    { path:'register', component: RegisterPage },
    { path: 'home', component: HomePage, canActivate: [AuthGuard]},
    { path: 'reset', component: ResetPage },
    { path: 'reset-password', component: ResetFormPage }
];

export const appRoutingProviders:any[]= [

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);