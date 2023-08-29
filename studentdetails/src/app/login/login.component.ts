import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string='';
  password:string='';
  text:string=''
   constructor(private route:Router){}
   login(){
     if (this.username==='meghana'&& this.password==='123') {
       this.route.navigate(['stud']);
     }
      else{
               this.text='please enter the valid username and password';
      }
  }  

  

  

  
}
 







