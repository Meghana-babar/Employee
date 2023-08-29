import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm:FormGroup
  constructor(private fb:FormBuilder,private route:Router){}
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
     const username=localStorage.getItem('username');
     const password=localStorage.getItem('password')
  }
  login(){
    if(this.loginForm.value.username=='meghana' && this.loginForm.value.password=='meghana@123')
    {
      let dataa=this.loginForm.value
      localStorage.setItem('credentials',JSON.stringify(dataa))
      alert("login Succesfully");
      this.route.navigate(['ptc'])
    }
    else
    {
      alert("invalid username and password");
    }

  }
  logout(){
    localStorage.clear();
  }

  // isLoggedIn:boolean=false;
  // login(){
  //   this.isLoggedIn=true;
  // }
  // logout(){
  //   this.isLoggedIn=false;
  // }
  // isAuthenticate(){
  //   return this.isLoggedIn;
  // }
}
