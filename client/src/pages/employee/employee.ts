import { Component } from '@angular/core';
import { LoopBackConfig , LoopBackAuth } from './../../app/shared/sdk/index';
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserApi } from './../../app/shared/sdk/services';
import { User, AccessToken } from './../../app/shared/sdk/models';
import { AddEmployeeComponent } from './../../app/add-employee/add-employee.component';
import { EditEmployeeComponent } from './../../app/edit-employee/edit-employee.component';
import { ModifyEmployeeComponent } from './../../app/modify-employee/modify-employee.component';

@Component({
  selector: 'employee',
  templateUrl: '../../pages/employee/employee.html',
  styleUrls: ['../../pages/employee/employee.scss']
})

export class EmployePage {

  employeeValues = [];
  organisationId: any;
  userId: any;



  constructor(
    private _userApi : UserApi,
    private _loopbackAuth: LoopBackAuth,
    private modalService: NgbModal 
  ) { }

  
  
  getEmployee(){         
    this.employeeValues =[]; // clear the array to avoid adding extra
    this._userApi.find({
      where: {
        userOrganisationId: this._loopbackAuth.getCurrentUserData().userOrganisationId,
        userStatus: 'Employee'
      }
    }).subscribe((results) => {
      for (var i = 0; i < results.length; i++) {
        this.employeeValues.push(results[i]);
      }
    })
  }
  
  afterAddEmployee(){
    this.getEmployee(); 
  }

  // Add a modal for 2nd validation before deleting the user
  onDelete(event) {
    this.userId = event.id;
    this._userApi.deleteById(this.userId,function(){

    }).subscribe((data) =>{
      this.getEmployee(); 
    })
  } 

  onChange(event){   
    console.log('ID of Event', event);
    const modalRef = this.modalService.open(ModifyEmployeeComponent); 
    modalRef.componentInstance.eventId = event.id;  // pass data through ng-bootstrap modal   
  }
 
  ngOnInit(){
    this.getEmployee();   
  }

}



