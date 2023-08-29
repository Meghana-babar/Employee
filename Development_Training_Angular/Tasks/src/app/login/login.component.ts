import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Inject
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup;
  constructor(){}
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl('meghana',Validators.required),
      password:new FormControl('1234',Validators.required)
    })
  }
onSubmit(){
  console.log(this.loginForm);
}
}
