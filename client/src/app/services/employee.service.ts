import { ModifyEmployeeComponent } from './../modify-employee/modify-employee.component';
import { ModifyClientComponent } from './../modify-client/modify-client.component';
import { UserClientHistoryApi } from './../shared/sdk/services/custom/UserClientHistory';
import { LoopBackAuth } from './../shared/sdk/services/core/auth.service';
import { UserApi } from './../shared/sdk/services/custom/User';
import { Injectable } from '@angular/core';
import { EmployePage } from './../../pages/employee/employee';

@Injectable()
export class EmployeeService {

  results =[];
  resultSelected:any = {};
  resultsHistory =[];
  resultHistorySelected:any = {};

  constructor(
    private _userApi: UserApi,
    private _userClientHistoryApi: UserClientHistoryApi,
    private _loopbackAuth: LoopBackAuth
  ) { }

  getEmployeeToModify(employeeSelectedId, callback: (data1) => void) {
    return this._userApi.find({
      where: {
        id: employeeSelectedId       
      }
    })
      .subscribe(
      res => {  
        callback(res);
      }, err => {
        console.error(err);
      }
      );
  }

  getEmployeeHistoryToModify(employeeSelectedId, callback: (data2) => void) {
    console.log('IDDD', employeeSelectedId);   
    this._userClientHistoryApi.find({      
      
    })
      .subscribe((result) => { 
        this.resultSelected = [];
        for(let i =0; i< result.length; i++){
            this.results.push(result[i]); 
            if(this.results[i].userId === employeeSelectedId){              
              this.resultSelected = this.results[i];              
            }     
        }       
        console.log('GGGG',this.resultSelected);
        callback(this.resultSelected);        
      });
  }


  updateEmployee(employeeSelectedId, newFirstName, newLastName, newEmail, newPhone, newTitle, newSpeciality, newLocation, newStartDate, newEndDAte) {
    console.log('HERE');     
    this._userApi.patchAttributes(employeeSelectedId, {
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      telephone: newPhone,      
      userSpeciality: newSpeciality,
      userTitle: newTitle
    }).subscribe((result)=>{
      console.log('NEW VALUE',result);
    }); 

    this._userClientHistoryApi.find({      
      
    })
      .subscribe((data) => { 
        this.resultHistorySelected = [];
        for(let i =0; i< data.length; i++){
            this.resultsHistory.push(data[i]);            
            if(this.resultsHistory[i].userId === employeeSelectedId){              
              this.resultHistorySelected = this.results[i];  
              let valueId = this.resultHistorySelected.id;
              this._userClientHistoryApi.patchAttributes(valueId,{
                startDate: newStartDate,
                endDate: newEndDAte,
                country: newLocation
              }).subscribe((result)=>{
                location.reload();
              });         
            }   
        }    
      });   
  }
}
