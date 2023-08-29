import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  formValue!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient){}

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      sid:['',Validators.required],
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['',Validators.required],
      city:['',Validators.required]
    })
  }
  httpOptions = {

     headers: new HttpHeaders({
    
   'Content-Type': 'application/json',
    
     }),
    
     };

  add(){
    let ser=JSON.stringify(this.formValue.value)//converting json
     this.http.post<any>("https://localhost:44344/insert",ser,this.httpOptions).subscribe()
     setTimeout(
      function()
      {
        location.reload();
      },1000
     );
      
 
  }

}
