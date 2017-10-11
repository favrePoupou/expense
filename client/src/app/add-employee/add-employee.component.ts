
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ClientApi, UserApi, UserClientHistoryApi, LoopBackAuth } from './../../app/shared/sdk';
import { Client, User } from './../../app/shared/sdk/models';
import { EmployePage } from './../../pages/employee/employee';
import { DatepickerModule as YourAlias } from 'angular2-material-datepicker';
import { AlertService } from './../../app/services/index';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {  
  
  clientValues = [];
  firstname: string;
  lastname: string;
  email: any;
  speciality: any;
  title: any;
  telephone: any;
  selectedClient: any;
  showAddEmployee: boolean;
  addButton: boolean;
  temp_password: any;
  startDate: any;
  endDate: any;
  country: any;
  newUser= [];
  addLocation: boolean;

  formError: {
    firstName: boolean,
    lastName: boolean,
    email: boolean,
    phone: boolean,
    selectedClient: boolean
  };


  constructor(
    private _clientApi: ClientApi,
    private _userApi: UserApi,
    private _router: Router,
    private _loopbackAuth: LoopBackAuth,
    private _employeePage: EmployePage,
    private _userClientHistory: UserClientHistoryApi,
    private alertService: AlertService
  ) { }


  validateClientForm() {
    var message = '';
    this.resetError();
    this.alertService.clear();
    if (!(this.firstname && this.firstname.length)) {
      this.formError.firstName = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(this.lastname && this.lastname.length)) {
      this.formError.lastName = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(this.email && this.email.length)) {
      this.formError.email = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!this.formError.email) {
      if (!(/\S+@\S+\.\S+/.test(this.email))) {
        this.formError.email = true;
        message += "L'email n'est pas valide. ";
      }
    }
    if (!(this.selectedClient.length)) {
      this.formError.selectedClient = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (!(this.telephone && this.telephone.length)) {
      this.formError.phone = true;
      if (!message.length) message += 'Un champ obligatoire est manquant.';
    }
    if (this.formError.firstName || this.formError.lastName || this.formError.email || this.formError.phone || this.formError.selectedClient) {
      this.alertService.error(message);
    }
  }

  IsClientFormValid() {
    return !(this.formError.firstName || this.formError.lastName || this.formError.email || this.formError.phone || this.formError.selectedClient);
  };



  createEmployee(firstname, lastname, email, telephone, speciality, title) {
    this.alertService.clear();
    this.validateClientForm();
    this.temp_password = this.makeRandomPassword(); // create random password for employee, he will reset it on the first connection on the app
    if (this.IsClientFormValid()) {
      this._userApi.create({
        firstName: firstname,
        lastName: lastname,
        email: email,
        telephone: telephone,
        password: this.temp_password,
        temp_password: this.temp_password,
        userStatus: 'Employee',
        clientId: this.selectedClient,
        userOrganisationId: this.getUserOrganisation(), //Fetch User Organisation to attribute it to the new employee
        userSpeciality: speciality,
        userTitle: title
      }).subscribe((data) => {
        this.newUser = [];
        this.newUser.push(data);
        let newUserId = '';
        newUserId = this.newUser[0].id;     // To allow to access to the id of object, we have to put it in array (waiting for solution)        
        this.getUserClient();
        this._employeePage.afterAddEmployee();

        // add the localisation history for each employee if it exist

       if(this.startDate && this.endDate && this.country){
          this._userClientHistory.create({
            startDate: this.startDate,
            endDate: this.endDate,
            userId: newUserId,
            country: this.country
          }).subscribe((result) => {
            console.log('RESULT _userClientHistory', result);
          }), err => {
            this.alertService.error(err.message);
          }
        }

        this.alertService.success('Votre employe a ete cree avec succès');
        this.clearForm();
        this._router.navigate(['/home']);
        setTimeout(() => {
          this.alertService.clear();
        }, 2000);
      }, err => {
        this.alertService.error('Votre courriel est existe déjà');
      })
    }
  }  

  showAddLocation() {
    this.addLocation = false;
  }

  hideAddLocation() {
    this.addLocation = true;
  }

  openAddEmployeeForm() {
    this.showAddEmployee = false;
  }

  closeAddEmployeeForm() {
    this.showAddEmployee = true;
    this.resetError();
    this.alertService.clear();
  }

  getUserOrganisation() {
    return this._loopbackAuth.getCurrentUserData().userOrganisationId;
  }

  /* 
   * This defaultValues will give the admin the possibility to select 
   * a non-assignement to the employee created on the dropdown list, this status is common for 
   * all admin and has to be sharable for all of them, the rest should be specific to each admin account
   */

  defaultValues() {
    this._clientApi.find({
      where: {
        userId: ""
      }
    }).subscribe((results) => {
      this.clientValues = [];
      for (var i = 0; i < results.length; i++) {
        this.clientValues.push(results[i]);
      }
    })
  }

  getUserClient() {
    this.clientValues = [];
    this.defaultValues(); // We add the defaultValues in the clientValues by default to have the non assignement status    
    this._clientApi.find({
      where: {
        userId: this._loopbackAuth.getCurrentUserId()
      }
    }).subscribe((results) => {
      for (var i = 0; i < results.length; i++) {
        this.clientValues.push(results[i]);
      }
    })
  }

  // Generate the random temporary password to the employee

  makeRandomPassword() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  clearForm() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.speciality = '';
    this.title = '';
    this.telephone = '';
    this.selectedClient = '';
    this.country = '';
    this.startDate = '';
    this.endDate = '';
    this.clientValues = [''];

  }

  resetError() {
    this.formError = {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      selectedClient: false
    }
  }

  ngOnInit() {
    this.clearForm();
    this.closeAddEmployeeForm();     // Initialize as closed     
    this.getUserClient();              // Fetch User Client
    this.hideAddLocation();
    this.resetError();
  }

}
