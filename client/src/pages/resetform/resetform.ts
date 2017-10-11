import { Subscription } from 'rxjs/Subscription';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoopBackConfig, LoopBackAuth } from './../../app/shared/sdk';
import { Component, OnInit } from '@angular/core';
import { UserApi } from './../../app/shared/sdk/services';
import { User, AccessToken, SDKToken } from './../../app/shared/sdk/models';
import { appRoutingProviders } from './../../app/app.routing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AlertService } from './../../app/services/index';


interface formErrorInterface {
    password: boolean;
    passwordConfirm: boolean;
    urlvalid: boolean
}

@Component({
    selector: 'reset-password',
    templateUrl: '../../pages/resetform/resetform.html',
    styleUrls: ['../../pages/resetform/resetform.scss']
})

export class ResetFormPage {
    title = 'Renseigner votre nouveau mot de passe';
    email: any;
    searchResults: any;
    password: any;
    passwordConfirm: any;
    formError: formErrorInterface;

    constructor(
        private http: Http,
        private userApi: UserApi,
        private router: Router,
        private route: ActivatedRoute,
        private loopBackAuth: LoopBackAuth,
        private alertService: AlertService

    ) { }

    validatePasswordReset() {
        var message = '';
        this.ResetErrors();
        this.alertService.clear();
        // to validate that the user try to change the password only from the normal way 
        if (!(this.route.snapshot.queryParams["email"] && this.route.snapshot.queryParams["access_token"])) {
            this.formError.urlvalid = true;
            this.alertService.error('Veuillez renseigner votre courriel dans l\' etape précédente');
            setTimeout(() => {
                this.router.navigate(['/reset']);
            }, 2000);
        }
        if (!this.formError.urlvalid) {
            if (!(this.password && this.password.length)) {
                this.formError.password = true;
                if (!message.length) message += 'Un champ obligatoire est manquant.';
            }
            if (!(this.passwordConfirm && this.passwordConfirm.length)) {
                this.formError.passwordConfirm = true;
                if (!message.length) message += 'Un champ obligatoire est manquant.';
            }
            if (this.passwordConfirm !== this.password) {
                this.formError.passwordConfirm = true;
                message += 'Les mots de passe doivent être identiques.';
            }
            if (this.password.length < 8) {
                this.formError.password = true;
                message += 'Le mot de passe doit contenir au moins 8 caractères.';
            }
            if (!(/[A-Z]/.test(this.password))) {
                this.formError.password = true;
                message += 'Le mot de passe doit contenir au moins une lettre majuscule.';
            }
            if (!/\d/.test(this.password)) {
                this.formError.password = true;
                message += 'Le mot de passe doit contenir au moins un chiffre.';
            }
            if (this.formError.password || this.formError.passwordConfirm) {
                this.alertService.error(message);
            }
        }
    }

    IsRegisterFormValid() {
        return !(this.formError.password || this.formError.passwordConfirm || this.formError.urlvalid);
    };

    setNewPassword(password, passwordConfirm) {
        this.alertService.clear();
        this.validatePasswordReset();
        if (this.IsRegisterFormValid()) {
            var formPasswordReset = password;
            var formConfirmPasswordReset = passwordConfirm;
            // Retrieve the email in the url params
            this.email = this.route.snapshot.queryParams["email"];
            // Find the user having this email
            this.userApi.find({
                where: {
                    email: this.email
                }
            }).subscribe((data) => {
                data.forEach((user: any) => {
                    // overwrite existing password for this user
                    this.userApi.updateAttributes(user.id, {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        userStatus: user.userStatus,
                        userOrganisationId: user.userOrganisationId,
                        password: passwordConfirm
                    }).subscribe((userModify) => {
                        console.log('Done', userModify);
                        this.alertService.success('Votre mot de passe a ete modifie');
                        setTimeout(() => {
                            this.router.navigate(['/']);
                        }, 2000);
                        this.clearForm();
                    }, err => {
                        this.alertService.error(err.message);
                        this.clearForm();
                    });
                });
            });
        }
    };

    clearForm() {
        this.password = '';
        this.passwordConfirm = '';
    }
    ResetErrors() {
        this.formError = {
            password: false,
            passwordConfirm: false,
            urlvalid: false
        };
    };
    ngOnInit() {
        this.clearForm();
        this.ResetErrors();
    }
}