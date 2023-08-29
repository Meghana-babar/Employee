import { Component, OnInit } from '@angular/core';
import {  StudentService } from '../Shared/student.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { tblStudent } from '../Shared/studentTable.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-info',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class studentComponent implements OnInit {


actionBtn:string='savve';

constructor(public Service:StudentService , private matdialog:MatDialog,private toastr:ToastrService){}

ngOnInit(): void {
  this.refreshData();
  
}
submit(form:NgForm){
if(this.Service.getStudent.studentID==0)
  this.insertData(form);
  else
  this.update(form);

  
}
insertData(myForm:NgForm){
  this.Service.InsertStudent() .pipe(
    catchError((error: HttpErrorResponse) => {if (error.status === 409) {  alert('User already exists'); }
     else {alert('An error occurred while creating the user'); }
      return throwError(error); }))
      .subscribe(data=>{
  this.resetForm(myForm);
   this.refreshData();
  this.toastr.success('Inserted successfully');
  }
  );

}
update(myForm:NgForm){
  this.actionBtn="update";
  this.Service.updateStudent().subscribe(data=>{
    this.resetForm(myForm);
   this.refreshData();
   this.toastr.info('Updated Successfully');
  });
}
resetForm(myForm:NgForm){
myForm.form.reset(myForm.value);
this.Service.getStudent = new tblStudent();
}
refreshData(){
  this.Service.GetStudentData().subscribe(res=>{
    this.Service.studentList = res
  });
}
}
