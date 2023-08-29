import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  loginForm:FormGroup;
  
  constructor(private route:Router){}
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl('meghana',Validators.required),
      password:new FormControl('1234',Validators.required)
      
    })
  }
onSubmit(){
  console.log(this.loginForm);
this.route.navigate([''])
  
}

}
