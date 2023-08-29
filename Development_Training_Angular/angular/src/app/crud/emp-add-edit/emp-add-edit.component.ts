import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';
import { CoreService } from 'src/app/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit{
  iseselect:boolean=false
  empForm:FormGroup;
  education:string[]=[
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ];
  constructor(private _fb:FormBuilder,
    private _empService:AuthService,
    private _dialogRef:MatDialogRef<EmpAddEditComponent>,
    private _coreService:CoreService,
    @Inject(MAT_DIALOG_DATA)public data:any
    ){
    this.empForm=this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      education:'',
      company:'',
      experience:'',
      package:'',
    });
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
  
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data)
      {
        this._empService.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next:(val:any)=>{
          // alert('Employee Detail Updated!!');
           this._coreService.openSnackBar('Employee Detail Updated!!');
           this._dialogRef.close(true);//automatically refresh the list in app component
          },
          error:(err:any)=>{
            console.error(err);
          },
          
        });
      }else{
  
      this._empService.addEmployee(this.empForm.value).subscribe({
      next:(val:any)=>{
      // alert('Employee Added Successfully');
       this._coreService.openSnackBar('Employee Added Successfully','Done');
       this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      },
      
    });
  }}
  }
}
