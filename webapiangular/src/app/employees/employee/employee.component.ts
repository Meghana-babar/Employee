import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';
import { InjectionToken } from '@angular/core';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(public service:EmployeeService,private toastr:ToastrService){}

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm){
 if(form!=null)
    form.resetForm();
    this.service.formData={
      EmployeeID:null,
      FullName:'',
      Position:'',
      EMPCode:'',
      Mobile:''
    }

  }
  onSubmit(form:NgForm){
    if(form.value.EmployeeID==null)
this.insertRecord(form);
else
this.updateRecord(form);
this.service.refreshList();
  }
  insertRecord(form:NgForm){
    this.service.postEmployee(form.value).subscribe(res=>{
      this.toastr.success("Inserted Successfully",'EMP.Register');
      this.resetForm(form);
  });
  }
  updateRecord(form:NgForm){
    this.service.pputEmployee(form.value).subscribe(res=>{
      this.toastr.warning("Updated Successfully",'EMP.Register');
      this.resetForm(form);
    });
  }
  
}
