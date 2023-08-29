import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule,MatButtonModule,HttpClientModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.css'],

})
export class StandaloneComponent implements OnInit {
pipemsg:string="Using custom pipe in standalone component";
displayColumn:any=[];

displaydata:boolean=false;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(res=>{
      console.log(res)
      this.displayColumn=res
    })
    
  }
  message:string="standalone will not load untill we have to use it somewhere";
  submt(){
 alert(this.message)
  }
  getdata(){
this.displaydata=!this.displaydata
  }

//   url="https://jsonplaceholder.typicode.com/users";
//   getuser(){
// this.http.get(this.url).subscribe(res=>{
//   console.log(res)
// })
//   }
//   GetUser(){
//     this.getuser()

//   }
click(){
  this.pipemsg
}

}
