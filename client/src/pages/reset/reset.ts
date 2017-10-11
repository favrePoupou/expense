import { RouterModule, Routes, Router } from '@angular/router';
import { LoopBackConfig, LoopBackAuth } from './../../app/shared/sdk';
import { Component } from '@angular/core';
import { UserApi } from './../../app/shared/sdk/services';
import { User, AccessToken, SDKToken } from './../../app/shared/sdk/models';
import { appRoutingProviders } from './../../app/app.routing';
import { AlertService } from './../../app/services/index';


@Component({
    selector: 'reset',
    templateUrl: '../../pages/reset/reset.html',
    styleUrls: ['../../pages/reset/reset.scss']
})


export class ResetPage {
    title = 'Réinitialiser votre mot de passe';
    email: any;
    formError;


    constructor(
        private userApi: UserApi,
        private router: Router,
        private alertService: AlertService
    ) { }

    resetPassword(email) {
        this.alertService.clear();
        this.resetError();
        this.userApi.resetPassword({
            email: email
        }).subscribe((res) => {
            this.alertService.success('Veuillez verifier votre courriel');
            setTimeout(() => {
                this.router.navigate(['/']);
            }, 2000);
            this.clearForm();
        }, err => {
            //this.alertService.error(err.message);
            this.alertService.error('Votre courriel est incorrect ou inexistant');
            this.formError.email = true;
            this.clearForm();
        })
    }

    clearForm() {
        console.log('INSIDE');
        this.email = "";
    }

    resetError() {
        this.formError = {
            email: false
        }
    }

    ngOnInit() {
        this.clearForm();
        this.resetError();
    }

}