import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { StudService } from '../shared/stud.service';
import { HttpClient } from '@angular/common/http';
import { AddComponent } from '../add/add.component';
import { MatDialog } from '@angular/material/dialog';
import { DemoComponent } from '../demo/demo.component';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  List:any=[];


  ngOnInit(): void {

     
    console.log("hello")



   
  }
  showadd!:boolean;
  showupdate!:boolean;
  add(){
this.showadd=true;
this.showupdate=false;

  }
  update(){
    this.showupdate=true;
    this.showadd=false;
  }

   
  constructor( private http:HttpClient,public dialog:MatDialog,private route:Router){
     this.http.get<any>("https://localhost:44344/get").subscribe(data=>{this.List=data})
     console.log(this.List)

  }

  insert(){
    this.dialog.open(AddComponent,{
      height:"75%",
      width:"40%",
    });

  }

  edit(A:any){
    this.dialog.open(UpdateComponent,{
      height:"75%",
      width:"40%",
      data:A
    });
  }
  delete(B:any){
    this.dialog.open(DeleteComponent,{
      height:"75%",
      width:"40%",
      data:B
    });

  }

  logout(){
    this.route.navigate(['']);

  }
}
