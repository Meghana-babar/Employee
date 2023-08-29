import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  empForm: FormGroup
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.empForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      email: [''],
      dob: [''],
      gender: [''],
      dept: [''],
      subForm: this.fb.group({
        empid: [''],
        address: ['']
      }),
      programminglanguage: new FormArray([
        new FormControl('')

      ]),
    });
  }

  submit() {
    console.log(this.empForm.value)
  }
  addpl() {
    let res = this.empForm.get('programminglanguage') as FormArray
    res.push(new FormControl('', Validators.required))
  }
  subf() {
    console.log()
  }


}
