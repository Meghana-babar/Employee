import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from '../Shared/student.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { studentComponent } from '../Student-info/student.component';
import { tblStudent } from '../Shared/studentTable.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css'],

})
export class StudentDeleteComponent implements OnInit {
  filterText:string='';
  students: any[] = [];
  actionBtn:string='save'
  filterColumn: string = '';
  filterCondition: string = 'is';
  filterValue: string = '';
  filterValues: string[] = [];
  columns: string[] = [];

  constructor(private matdialog: MatDialog, public Service: StudentService, private routr: Router, private toastr: ToastrService,private http:HttpClient) { }


  ngOnInit() {

    this.getstudentList('Any', 'John', ["g"]);
  }

  OnClick() {
    this.matdialog.open(studentComponent, {
      width: '50%', height: '80%'
    }
    )
  }
 /* getstudentList() {
    this.Service.GetStudentData().subscribe(data => { this.Service.studentList = data });
    this.refreshData();

  }*/

  getstudentList(condition: string, value: string, values: string[]) {
    this.Service.GetStudentData(condition, value, values).subscribe(data => {
      this.Service.studentList = data;
      this.refreshData(condition, value, values);
    });
  }
  
  

  OnEdit(selectedstudent: tblStudent) {
    console.log(selectedstudent);
    
    this.Service.getStudent = selectedstudent;
    this.OnClick();
  }
  OnDelete(id: any) {
    if (confirm('Are you really want to delete ?')) {
      this.Service.deleteStudent(id).subscribe(d => {
        this.refreshData('Any', 'John', []);
        this.toastr.warning('Deleted Successfully');

      })
    }
    else {
      confirm('Not Deleted !');
    }
  }
  /*refreshData() {
    this.Service.GetStudentData().subscribe(d => {
      this.Service.studentList = d
    })

  }*/

  refreshData(condition: string, value: string, values: string[]) {
    this.Service.GetStudentData(condition, value, values).subscribe(d => {
      this.Service.studentList = d;
    });
  }
  

  logout() {
    localStorage.clear();
    this.routr.navigate(['']);
    this.toastr.warning('Logout Successfully');
  }

  //filter
  fetchStudents(): void {
    let params = new HttpParams();
    if (this.filterCondition === 'is') {
      params = params.set('condition', 'Any');
      params = params.set('value', this.filterValue);
    } else if (this.filterCondition === 'is-any') {
      params = params.set('condition', 'IsAny');
      params = params.set('values', this.filterValues.join(','));
    } else if (this.filterCondition === 'contains') {
      params = params.set('condition', 'Contains');
      params = params.set('value', this.filterValue);
    }
 
    const url='https://localhost:7157/api/Students?condition=&value=+ params.toString()' ;

    this.http.get<any[]>((url), { params: params }).subscribe(
      students => {
        this.students = students;
      },
      error => {
        console.log(error);
      }
    );
  }
  applyFilter(): void {
    this.fetchStudents();
  }
}
