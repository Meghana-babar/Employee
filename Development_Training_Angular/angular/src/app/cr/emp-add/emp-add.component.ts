import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';
import { CoreService } from 'src/app/core.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent {
  iseselect:boolean=false
  empForm:FormGroup;
  education:string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ];
  constructor(private _fb: FormBuilder,
    private _empService: AuthService,
    private _dialogRef: MatDialogRef<EmpAddComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      education: ['', Validators.required],
      company: ['', Validators.required],
      experiences: this._fb.array([]),
      family: this._fb.group({
        name: ['', Validators.required],
        relationship: ['', Validators.required],
        age: ['', Validators.required]
      })
    });
    this.addExperience();
}

get experiences(): FormArray {
  return this.empForm.get('experiences') as FormArray;
}

createExperience(): FormGroup {
  return this._fb.group({
    companyName: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    role: ['', Validators.required]
  });
}
addExperience(): void {
  this.experiences.push(this.createExperience());
}

removeExperience(index: number): void {
  this.experiences.removeAt(index);
}
  
  
 
  
  ngOnInit(): void {
    firstName:['',Validators.required]
    lastName:['',Validators.required]
    email:['',Validators.required]
    dob:['',Validators.required]
    gender:['',Validators.required]
    education:['',Validators.required]
    company:['',Validators.required]
    experience:['',Validators.required]
    this.empForm.patchValue(this.data);
  }
  
  onFormSubmit(): void {
    if (this.empForm.valid) {
      const formData = { ...this.empForm.value };
      formData.experiences = formData.experiences.map((experience: any) => experience.experience);
      
      if (this.data) {
        this._empService.updateEmployee(this.data.id, formData).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee Detail Updated!!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this._empService.addEmployee(formData).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee Added Successfully', 'Done');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
  
}
