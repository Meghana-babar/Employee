import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  otpInputConfig:NgxOtpInputConfig={
    otpLength:6,
    autofocus:true,
    classList:{
      inputBox:'my-super-box-class',
      input:'my-super-class',
      inputFilled:'my-super-filled-class',
      inputDisabled:'my-super-disabled-class',
      inputSuccess:'my-super-success-class',
      inputError:'my-super-error-class'
    }
  }
  handleotpchange(value:any):void{}
  handleFillEvent(value:any):void{
    console.log(value);
  }
  constructor(private fb:FormBuilder,
    private route:Router,
    private _auth:AuthService){
      sessionStorage.clear();
    }
    result:any
    loginForm=this.fb.group({
      id:this.fb.control('',Validators.required),
      password:this.fb.control('',Validators.required)
    });
    proceedLogin(){
      if(this.loginForm.valid)
      {
        this._auth.GetUserBycode(this.loginForm.value.id).subscribe((item:any)=>{
          this.result=item;
          if(this.result.password===this.loginForm.value.password){
            if(this.result.isactive)
            {
              sessionStorage.setItem('id',this.result.id);
              sessionStorage.setItem('role',this.result.role);
              this.route.navigate(['dashboard']);
            }else{
              alert("pease contact admin");
            }

          }
          else{
            alert("invalid credentials");
          }
        });
      }else{
        alert("please enter valid data");
      }
    }
  ngOnInit(): void {
  }
}
