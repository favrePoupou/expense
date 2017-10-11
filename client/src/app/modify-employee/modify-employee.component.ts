import { EmployePage } from './../../pages/employee/employee';
import { LoopBackAuth } from './../../../../client/src/app/shared/sdk';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserApi } from './../../app/shared/sdk/services';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {

  @Input()   eventId; // retrieve this params from pages/client/client.ts as modal data
  //eventEmail;

 // employeeSelectedEmail: any;
  employeeSelectedId: any;
  employees: any;
  employeesHistories: any;
  newFirstName: any;
  newLastName: any;
  newEmail: any;
  newPhone: any;
  newSpeciality: any;
  newTitle: any;
  newClient: any;
  newLocation: any;
  newStartDate: any;
  newEndDAte: any;
  //employeeSelectedToModify: any;

  
  constructor(
    private _employeeService: EmployeeService,
    private _loopbackAuth : LoopBackAuth,
    private _userApi: UserApi,
    public activeModal: NgbActiveModal,
    //private _employeePage: EmployePage
  ) { }


  // get data from service (EmployeeService) and return it from 2 different callbacks 

  getEmployeeForUpdate(){
    this.employeeSelectedId = this.eventId;

    this._employeeService.getEmployeeToModify(this.employeeSelectedId, (data1) =>{
      this.employees = data1;
      this.newFirstName = this.employees[0].firstName;
      this.newLastName = this.employees[0].lastName;
      this.newEmail = this.employees[0].email;
      this.newPhone = this.employees[0].telephone;
      this.newTitle = this.employees[0].userTitle;
      this.newSpeciality = this.employees[0].userSpeciality;     
    })
  
    this._employeeService.getEmployeeHistoryToModify(this.employeeSelectedId, (data2) => {
       this.employeesHistories = data2;     ;       
       if(Object.keys(this.employeesHistories).length >0) {  
        this.newStartDate = new Date(this.employeesHistories.startDate);
        this.newEndDAte = new Date(this.employeesHistories.endDate);
        this.newLocation = this.employeesHistories.country;
       }else{

       }    
    })    
  }

  clearDate(){
    this.newStartDate = '';
    this.newEndDAte = '';
    return true;
  }

  modifyEmployee(newFirstName,newLastName,newEmail,newPhone,newSpeciality,newTitle,newLocation,newStartDate,newEndDAte){
    this._employeeService.updateEmployee(this.employeeSelectedId, this.newFirstName, this.newLastName, this.newEmail, this.newPhone, this.newTitle, this.newSpeciality,this.newLocation, this.newStartDate,this.newEndDAte);
    this.activeModal.close();    
  }

  closeAddEmployeeForm(){
    this.activeModal.close();
  }


  ngOnInit() {
    this.getEmployeeForUpdate();
  }

}
