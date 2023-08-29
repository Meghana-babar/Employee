import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform1',
  templateUrl: './reactiveform1.component.html',
  styleUrls: ['./reactiveform1.component.css']
})
export class Reactiveform1Component {
  reactive:FormGroup
  reactiveinnner:FormGroup

  ngOnInit(){
    this.reactive=new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.email),
      gender:new FormControl(),
      age:new FormControl(),
      department:new FormControl(),
      hobbies:new FormArray([
      new FormControl(),
    ]),
    // skills:new FormArray([
    //   new FormControl()
    // ]),
    reactiveinnner:new FormGroup({
    brothername:new FormControl(),
    sistername:new FormControl()
    })
  });
  }
 
  
  edit(){
    this.reactive.patchValue({
      firstname: 'fgh',
      lastname:'hd'
 
    })
  }

  submit(){
    console.log(this.reactive.value)
  }

  addskil(){
    let hob=this.reactive.get('hobbies') as FormArray
    hob.push(new FormControl('',Validators.required))
    console.log(this.reactive.value)
  }

  send(){
   console.log(this.reactiveinnner) 
  }
 
}
