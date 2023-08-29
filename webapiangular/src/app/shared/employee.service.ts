import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import{HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData:Employee;
  list:Employee[];
  readonly routeurl="https://localhost:44364/api";

  constructor(private http:HttpClient) { }

  postEmployee(formData:Employee){
   return this.http.post(this.routeurl+'/Employees',formData);

  }
  refreshList(){
    this.http.get(this.routeurl+'/Employees')
    .toPromise().then(res=>this.list=res as Employee[]);
  }
  pputEmployee(formData:Employee){
    return this.http.put(this.routeurl+'/Employees/'+formData.EmployeeID,formData);
 
   }
   deleteEmployee(id:number){
    this.http.delete(this.routeurl+'/Employees/'+id);
   }
}
