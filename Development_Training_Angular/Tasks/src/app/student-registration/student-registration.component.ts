import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {
  constructor(private routr:Router){}
  login(){
    this.routr.navigate(['studregsuccess'])

  }

}
