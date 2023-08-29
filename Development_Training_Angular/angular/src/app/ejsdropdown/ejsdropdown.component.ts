import { Component, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ejsdropdown',
  templateUrl: './ejsdropdown.component.html',
  styleUrls: ['./ejsdropdown.component.css']
})
export class EjsdropdownComponent {

  employees: any[];
  condition: string = '';
  selectedValue: any = '';
  inputValue: any = '';
  filteredData: any[];
  isanyStore:any[]=[];
  parr:any[]=[];
  conditionData: any[] = [
    { text: 'Select Condition', value: '' },
    { text: 'Is Any', value: 'is-any' },
    { text: 'Contains', value: 'contains' }
  ];
  fieldData: any[] = [
    { text: 'Select Field', value: '' },
    { text: 'ID', value: 'Id' },
    { text: 'First Name', value: 'firstName' },
    { text: 'Last Name', value: 'lastName' },
    { text: 'Email', value: 'email' },
    { text: 'Dob', value: 'dob' },
    { text: 'Gender', value: 'gender' }
  ];
  conditionFields: object = { text: 'text', value: 'value' };
  fieldFields: object = { text: 'text', value: 'value' };
  valueData: any[] = [];

  filtergetdata(){
    // this.filterdata.emit(this.applyFilter())
  }
  constructor(
    private employeeService: AuthService,
    private _dialog:DialogRef,
    private route:Router,
    public dialogRef:MatDialogRef<EjsdropdownComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any 
    ){}

  ngOnInit() {
    this.employeeService.getEmployeeList().subscribe(
      (res: any) => {
        this.employees = res;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  onConditionChange() {
    this.selectedValue = ''; // Reset the selected field
    this.inputValue = ''; // Reset the input value
    this.filteredData = null; // Clear the filtered data

    if (this.condition !== 'is-any') {
      this.valueData = [];
    }
  }


  onFieldSelectionChange() {
    if (this.condition === 'is-any') {
      this.valueData = this.employees.map(emp => emp[this.selectedValue]);
    } else {
      this.valueData = [];
    }
  }

  getExistingValues(propertyName: string): any[] {
    const existingValues = new Set(this.employees.map(emp => emp[propertyName]));
    const existingValuesset = Array.from(existingValues);
    return existingValuesset;
  }


  /*displayRecord() {
    this.filteredData = this.employees.filter(emp => emp[this.selectedValue] === this.inputValue);
  }
  */
  displayRecord() {
    if (this.condition === 'is-any' && this.selectedValue !== '' && this.inputValue !== '') {
      this.filteredData = this.employees.filter(emp => emp[this.selectedValue] === this.inputValue);
    }
  }

  applyFilter() {
    console.log(this.inputValue)   
    if (this.condition === 'is-any' && this.selectedValue !== '' && this.inputValue !== '') {
      //this.filteredData = this.employees.filter(emp => emp[this.selectedValue] === this.inputValue);
      console.log(this.employees)
      this.isanyStore=[];

      for(let getData of this.inputValue){
        console.log(getData)
        const storeData=this.employees.filter((item:any)=>{
          return item[this.selectedValue].includes(getData)
        })
       
        this.filteredData=this.isanyStore;
        this.isanyStore.push(...storeData);
        
      }
      console.log(this.isanyStore);
      this.filteredData=this.isanyStore;
     } else if (this.condition === 'contains' && this.selectedValue !== '' && this.inputValue !== '') {
      this.filteredData = this.employees.filter(emp => emp[this.selectedValue].includes(this.inputValue));
      
    } else {
    //  this.filteredData = [];
    }
  }
  close(){
    this.dialogRef.close({
      condition:this.condition,
      selectedValue:this.selectedValue,
      inputValue:this.inputValue,
    });
   //this.applyFilter();
  }
  // applyFilter1() {
  //   // ... your existing code to filter the data
    
  //   // Emit the filtered data
  //   this.filterApplied.emit(this.filteredData);
  // }
  

}
