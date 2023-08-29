import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  formValue!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,@Inject (MAT_DIALOG_DATA) public mat:any){}

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      sid:[''],
      name:[''],
      email:[''],
      mobile:[''],
      city:['']
    })
    this.formValue.patchValue({
      sid:this.mat.sid,
      name:this.mat.name,
      email:this.mat.email,
      mobile:this.mat.mobile,
      city:this.mat.city
      
    })
  }
  httpOptions = {

    headers: new HttpHeaders({
     
      'Content-Type': 'application/json',
     
    }),
     
     };
  edit(){
    let ser =JSON.stringify(this.formValue.value)
this.http.put("https://localhost:44344/update",ser,this.httpOptions).subscribe()
setTimeout(
  function()
  {
    location.reload();
  },1000
 );
  }

  

}
