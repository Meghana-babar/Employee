import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { studentComponent } from './Student-info/student.component';
import { NgForm } from '@angular/forms';
import {  StudentService } from './Shared/student.service';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { tblStudent } from './Shared/studentTable.model';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'studentDATA';

 constructor(private authservice:AuthService){}
 login(){
  this.authservice.login();
 }
 logout(){
  this.authservice.logout();
 }
}
