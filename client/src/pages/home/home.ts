import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoopBackConfig, LoopBackAuth } from './../../app/shared/sdk/index';
import { UserApi } from './../../app/shared/sdk/services';
import { User, AccessToken, SDKToken } from './../../app/shared/sdk/models';

import { ExpensePage } from './../../pages/expense/expense';
import { ClientPage } from './../../pages/client/client';
import { EmployePage } from './../../pages/employee/employee';
import { ProjectPage } from './../../pages/project/project';
import { Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'home',
    templateUrl: '../../pages/home/home.html',
    styleUrls: ['../../pages/home/home.scss']

})

export class HomePage {
    title = "Panneau d`administration";
    userInfo = this._loopBackAuth.getCurrentUserData().email;

    constructor(
        private _userApi: UserApi,
        private _router: Router,
        private _loopBackAuth: LoopBackAuth
    ) { }

       
    onLogout(){    
        this._userApi.logout();
        this._router.navigateByUrl('/');
        
    }
}