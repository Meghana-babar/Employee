import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private employees:AuthService) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      designation: ['', Validators.required],
      experiences: this.formBuilder.array([]),
      family: this.formBuilder.group({
        name: ['', Validators.required],
        relationship: ['', Validators.required],
        age: ['', Validators.required],
      }), });
    }
  
    get experiences(): FormArray {
      return this.employeeForm.get('experiences') as FormArray;
    }
  
    addExperience(): void {
      const experienceFormGroup = this.formBuilder.group({
        companyName: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        role: ['', Validators.required],
      });
  
      this.experiences.push(experienceFormGroup);
    } deleteExperience(index: number): void {
      this.experiences.removeAt(index);
    }
    submitForm(): void {
      const employeeData = {
        // Get the employee form data here
      };
  
      this.employees.addEmployeed(employeeData).subscribe(
        (response) => {
          console.log('Employee added successfully:', response);
          // Reset the form here
        },
        (error) => {
          console.error('Error adding employee:', error);
        }
      );
    }

}
