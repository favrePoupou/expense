import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ClientApi, UserApi, LoopBackAuth } from './../../app/shared/sdk';
import { Client, User } from './../../app/shared/sdk/models';
import { EmployePage } from './../../pages/employee/employee';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  
  firstname: string;
  lastname: string;
  email: any;
  speciality: any;
  title: any;
  telephone: any;
  selectedClient: any;
  showModifyEmployee: boolean;
  addButton: boolean;
  temp_password: any;
  

  constructor() { }


  updateEmployee(firstname,lastname,email,telephone,speciality,title){

  }

  closeEditEmployeeForm() {
    this.showModifyEmployee = true;
  }

  openEditEmployeeForm() {
    this.showModifyEmployee = false;
  }


  clearForm(){
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.speciality = '';
    this.title = '';
    this.telephone = '';
    this.selectedClient = '';

  }

  ngOnInit() {
    this.clearForm();
    this.closeEditEmployeeForm();     // Initialize as closed   
  }

}
