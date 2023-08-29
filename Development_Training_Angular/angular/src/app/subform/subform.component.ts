import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
  styleUrls: ['./subform.component.css']
})
export class SubformComponent implements OnInit{
anyForm:FormGroup
constructor(private fb:FormBuilder){}
ngOnInit(){
this.anyForm=this.fb.group({
  firstname:new FormControl(''),
  lastname:new FormControl(''),
  email:new FormControl(''),
  hobbies:this.fb.array([
  ]),
})
}

addshobby(){
  let hob=this.anyForm.get('hobbies') as FormArray
  hob.push(new FormControl('',Validators.required))
  console.log(this.anyForm.value)

}
}
