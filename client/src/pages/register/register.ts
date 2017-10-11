import { RouterModule, Routes, Router } from '@angular/router';
import { LoopBackConfig } from './../../../../client/src/app/shared/sdk';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { appRoutingProviders } from './../../app/app.routing';
import { UserApi, UserOrganisationApi } from './../../app/shared/sdk/services';
import { User, UserOrganisation, AccessToken } from './../../app/shared/sdk/models';
import { AlertService } from '../../app/services/index';


interface formErrorInterface {
  firstname: boolean,
  lastname: boolean,
  email: boolean,
  password: boolean,
  passwordConfirm: boolean,
  selectedValue: boolean
}

@Component({
  selector: 'register',
  templateUrl: '../../pages/register/register.html',
  styleUrls: ['../../pages/register/register.scss']
})

export class RegisterPage {
  values = [];
  firstname: string;
  lastname: string;
  email: any;
  password: any;
  selectedValue: any;
  passwordConfirm: any;
  formError: formErrorInterface;

  constructor(
    private _userApi: UserApi,
    private router: Router,
    private _userOrganisationApi: UserOrganisationApi,
    private alertService: AlertService
  ) { }

  signUp(firstname, lastname, email, password, passwordConfirm) {
    this.alertService.clear();
    this.ValidateRegisterForm();
    if (this.IsRegisterFormValid()) {
      this._userApi.create({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        userStatus: 'Admin',
        userOrganisationId: this.selectedValue
      }).subscribe((res) => {
        console.log('NEW USER', res);
        this.clearForm();
        this.alertService.success('Registration successful', true);
        setTimeout(() => {
          this.router.navigate(['/']);
      }, 1000);
      }, err => {
        this.alertService.error(err.message);
      })
    }
  };

  fetchOrganisation() {
    this._userOrganisationApi.find().subscribe((results) => {
      for (var i = 0; i < results.length; i++) {
        this.values.push(results[i]);
      }
    })
  }

  ValidateRegisterForm() {
    var message = '';
    this.ResetErrors();
    this.alertService.clear();
    if (!(this.firstname && this.firstname.length)) {
      this.formError.firstname = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(this.lastname && this.lastname.length)) {
      this.formError.lastname = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(this.selectedValue.length)) {
      this.formError.selectedValue = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(this.email && this.email.length)) {
      this.formError.email = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(/\S+@\S+\.\S+/.test(this.email))) {
      this.formError.email = true;
      message += "L'email n'est pas valide. ";
    }
    if (!(this.password && this.password.length)) {
      this.formError.password = true;
      if (!message.length) message += 'Un champ obligatoire est manquant. ';
    }
    if (!(this.passwordConfirm && this.passwordConfirm.length)) {
      this.formError.passwordConfirm = true;
      if (!message.length) message += 'Un champ obligatoire est manquant. ';
    }
    if (this.passwordConfirm !== this.password) {
      this.formError.passwordConfirm = true;
      message += 'Les mots de passe doivent être identiques. ';
    }
    if (this.password.length < 8) {
      this.formError.password = true;
      message += 'Le mot de passe doit contenir au moins 8 caractères. ';
    }
    if (!(/[A-Z]/.test(this.password))) {
      this.formError.password = true;
      message += 'Le mot de passe doit contenir au moins une lettre majuscule. ';
    }
    if (!/\d/.test(this.password)) {
      this.formError.password = true;
      message += 'Le mot de passe doit contenir au moins un chiffre. ';
    }
    if (this.formError.firstname || this.formError.lastname || this.formError.selectedValue || this.formError.email || this.formError.password || this.formError.passwordConfirm) {
      this.alertService.error(message);
    }
  };

  IsRegisterFormValid() {
    return !(this.formError.firstname || this.formError.lastname || this.formError.selectedValue || this.formError.email || this.formError.password || this.formError.passwordConfirm);
  };

  ResetErrors() {
    this.formError = {
      firstname: false,
      lastname: false,
      email: false,
      password: false,
      passwordConfirm: false,
      selectedValue: false
    };
  };

  clearForm() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.selectedValue = '';
    this.password = '';
    this.passwordConfirm = '';
  }

  ngOnInit() {
    this.clearForm();
    this.fetchOrganisation();
    this.ResetErrors();
  }


}
