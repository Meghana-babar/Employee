import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from '../services/employee.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
  public get empService(): EmployeeService {
    return this._empService;
  }
  public set empService(value: EmployeeService) {
    this._empService = value;
  }
  displayedColumns: string[] = ['id', 
  'firstName', 
  'lastName', 
  'email',
  'dob',
  'gender',
  'education',
  'company',
  'experience',
  'package',
  'action',
];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog:MatDialog,private _empService: EmployeeService,
    private _coreService:CoreService){

  }
  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm(){
   const dialogRef= this._dialog.open(EmpAddEditComponent);//appended where i want to
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        console.log(val);
         this.getEmployeeList();                                      //if it is true it wll refresh data
      }
    }
   });
  }
  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      //handle the response
      next:(res)=>{
        //console.log(res);
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort ;               //getting from viewchild
        this.dataSource.paginator=this.paginator;

      },
      error:console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id:number){
    this._empService.deleteEmployee(id).subscribe({
      next:(res)=>{
        //alert("Employee deleted!");
        this._coreService.openSnackBar('Employee deleted!','Done');
        this.getEmployeeList();//automatically refresh the data or list
      },
      error:console.log,
    });
  }

  openEditForm(data:any){
   const dialogRef= this._dialog.open(EmpAddEditComponent,{
      data,
    });
  

  dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
         this.getEmployeeList();                                      //if it is true it wll refresh data
      }
    }
   });
  }
}
