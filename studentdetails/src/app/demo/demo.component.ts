import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  formValue!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,@Inject (MAT_DIALOG_DATA) public mat:any){}

  httpOptions = {

   headers: new HttpHeaders({
    
     'Content-Type': 'application/json',
    
   }),
    
    };

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      sid:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      city:['',Validators.required]
    })
this.formValue.patchValue({
  sid:this.mat.sid,
  name:this.mat.name,
  email:this.mat.email,
  mobile:this.mat.mobile,
  city:this.mat.city
  
})

  }
  edit(){
    let ser =JSON.stringify(this.formValue.value)
this.http.put("https://localhost:44344/update",ser,this.httpOptions).subscribe()
  }

}
