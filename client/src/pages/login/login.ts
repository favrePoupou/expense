import { RouterModule, Routes, Router } from '@angular/router';
import { LoopBackConfig, LoopBackAuth } from './../../app/shared/sdk';
import { Component, OnInit } from '@angular/core';
import { UserApi } from './../../app/shared/sdk/services';

import { User, AccessToken, SDKToken } from './../../app/shared/sdk/models';
import { appRoutingProviders } from './../../app/app.routing';



import { AlertService } from './../../app/services/index';


interface formErrorInterface {
    email: boolean;
    password: boolean;
}

@Component({
    selector: 'login',
    templateUrl: '../../pages/login/login.html',
    styleUrls: ['../../pages/login/login.scss']
})

export class LoginPage implements OnInit {
    title = 'Administration';
    email: any;
    password: any;
    formError: formErrorInterface;
    message: string;
    private state: string = 'login';

    constructor(
        private userApi: UserApi,
        private router: Router,
        private loopBackAuth: LoopBackAuth,
        private alertService: AlertService
    ) { }

    logIn(email, password) {
        this.alertService.clear();
        this.ValidateLoginForm();
        if (this.IsLoginFormValid()) {
            this.userApi.login({
                email: email,
                password: password
            }).subscribe((token: SDKToken) => {
                this.router.navigate(['/home']);
                this.clearForm();
            }, err => {
                //let messageError = 'Login failed : ' + err.name + ' ' + err.statusCode + ' ' + err.message;
                let messageError = 'Vos coordonnées d\'authentification sont incorrects';
                this.alertService.error(messageError);
                this.clearForm();
            })
        }
    };

    clearForm() {        
        this.password = '';
    }

    ValidateLoginForm() {
        this.message = '';
        this.ResetLoginErrors();
        this.alertService.clear();

        if (!(this.email && this.email.length)) {
            this.formError.email = true;
            if (!this.message.length) this.message += 'Field is required';
        }

        if (!(this.password && this.password.length)) {
            this.formError.password = true;
            if (!this.message.length) this.message += 'Field is required';
        }
        if (this.formError.email || this.formError.password) {
            this.alertService.error(this.message);
        }

    };

    IsLoginFormValid() {
        return !(this.formError.email || this.formError.password);
    };

    ResetLoginErrors() {
        this.formError = {
            email: false,
            password: false
        };
    }

    ngOnInit() {
        this.clearForm();
        this.ResetLoginErrors();
    }
}