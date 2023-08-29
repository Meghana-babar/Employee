import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  FullName :string="";
  Email:string="";
  password:string="";
  constructor(private route:Router){}
   register(){
    
   }

}
