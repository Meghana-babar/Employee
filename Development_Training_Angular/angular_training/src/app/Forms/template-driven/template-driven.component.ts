import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit{
  firstname:string;
  lastname:string;
  phonenumber:number;
  email:string;
  address:string;
  selectedValue:string;
myForm:any |FormGroup
data:any;
constructor(private _authservice:AuthService){}
  add(form:any){
    let ser=JSON.stringify(form)
    this._authservice.adduser(ser).subscribe()
  //   let ser=JSON.stringify(this.myForm.value)
  // this._authservice.adduser(ser).subscribe(res=>{
  //   console.log(this._authservice.use = res)
  // });

  }
  reset(formvalue:NgForm){
formvalue.reset()  }
setForm(formvalue:NgForm){
  let edetails={
    firstname:'meghana',
    lastname:'babar',
    phonenumber:776048917,
    selectedValue:"1",
    email:'abc@gmail.com',
    address:"p l babar"
  }
formvalue.setValue(edetails)
}

//crud

  ngOnInit(): void {

  }

postuser(){


// const postbody={
//   title: fv.value.firstname,
//   body:fv.value.lastname,
// }
//   this._authservice.adduser()

 }
 submitpost(){
  // let ser=JSON.stringify(this.myForm.value)
  // this._authservice.adduser(ser);
 }
}
