import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private toastr: ToastrService,private authservice:AuthService) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpusers');
    if (localData != null) {
      this.Signupusers = JSON.parse(localData);
    }
  }
  Signupusers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  };
  loginObj: any = {

    email: '',
    password: ''
  };
  isValid() {
    return (this.signupObj.userName &&
      this.signupObj.email &&
      this.signupObj.password);
  }
  onSignup() {
    if (this.isValid()) {
      this.Signupusers.push(this.signupObj)
      localStorage.setItem('signUpusers', JSON.stringify(this.Signupusers));
      this.signupObj = {
        userName: '',
        email: '',
        password: '',
      };
      this.toastr.success('Sign-up successfully');
    }
    else {
      alert("hhhh")
    }
  }

  onLogin() {
    if (!this.loginObj.email || !this.loginObj.password) {
      alert('Please enter both email and password');
      return;
    }
    const isUserExist = this.Signupusers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if (isUserExist) {
      this.authservice.login();
      this.toastr.success('Login Successfully');
      localStorage.setItem('isUserlogged',"true");

      this.route.navigate(['/stud']);
    } else {
      this.toastr.warning('Please enter valid username and password');
    }
  }





  






  /*
  
    log:string=''
  
    MESSAGE:string=''
  
    details:any;
  
     obj:object | undefined;
  
    Num:any;
  
    shift:boolean=true;
  
    Signup:any;
  
    login:any;
  
    constructor(private route:Router,private http:HttpClient,private dialog:MatDialog){
  
    }
  
    ngOnInit() {
  
  this.http.get("https://localhost:7157/api/Students").subscribe(data=>{this.details=data})
  
  this.Signup=new FormGroup({
  
        PhoneNo:new FormControl('',Validators.required),
  
        UserName:new FormControl('',Validators.required),
  
        Password:new FormControl('',Validators.required),
  
      })
  
    }
  
  P:string=''
  
  U:string=''
  
  error:string=''
  
   submit(){
  
   for(let element of this.details){console.log(element.Password);
  
    if(this.U===element.UserName && this.P===element.Password){
  
      this.route.navigate(['emp'])
  
    }
  
    else{
  
      this.error='please enter the valid username and password'
  
    }}
  
   }
  
   httpOptions = {
  
    headers: new HttpHeaders({
  
      'Content-Type': 'application/json',
  
    }),
  
  };
  
   register(){
  
    let x=JSON.stringify(this.Signup.value)
  
    this.http.post('https://localhost:7157/api/Students',x,this.httpOptions).subscribe()
  
    this.MESSAGE='SignUp Successfull...✓'
  
    this.log='Click here'
  
    this.Signup.reset();
  
   }
  
   ok(){
  
    this.shift=true;
  
   }
  
  
  */




}
