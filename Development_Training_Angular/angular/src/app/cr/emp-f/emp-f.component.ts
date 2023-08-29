import { Component, ViewChild } from '@angular/core';
import { EmpAddComponent } from '../emp-add/emp-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { EjsdropdownComponent } from 'src/app/ejsdropdown/ejsdropdown.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';
import { CoreService } from 'src/app/core.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-emp-f',
  templateUrl: './emp-f.component.html',
  styleUrls: ['./emp-f.component.css']
})
export class EmpFComponent {
  catchfilterdata: any
  employees: any[];
  selectedValue: any = '';
  inputValue: any = '';
  filteredData: any[];
  isanyStore: any[] = [];
  parr: any[] = [];
  conditionData: any[] = [
    { text: 'Select Condition', value: '' },
    { text: 'Is Any', value: 'is-any' },
    { text: 'Contains', value: 'contains' },
    { text: 'Not Contains', value: 'not-contains' }

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
  C: any
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
  dataSource: any = MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterst: any;


  constructor(private _dialog: MatDialog, private _empService: AuthService,
    private _coreService: CoreService, private route: Router) {

  }
  ngOnInit(): void {
    this.getEmployeeList();
    this._empService.getEmployeeList().subscribe({

      //handle the response
      next: (res) => {
        console.log(res);
        this.filterst = res;
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.sort = this.sort;               //getting from viewchild
        this.dataSource.paginator = this.paginator;
        this.searchItem = res;//filter
        console.log(this.searchItem)
        if (this.setcolumn) {
          for (let element of res)
            this.empNamerender.push(element[this.setcolumn])
        }

      },
      error: console.log,
    });
    //ejs

  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddComponent);//appended where i want to
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.ngOnInit();                                      //if it is true it wll refresh data
        }
      }
    });
  }
  openFilterEmpForm() {
    const dialogRef = this._dialog.open(EjsdropdownComponent, {
      panelClass: 'dialog-content',
      height: '80%',
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.selectedValue = data.selectedValue;
        this.inputValue = data.inputValue;
        //this.applyFilter1();
      }
    });
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({

      //handle the response
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.sort = this.sort;               //getting from viewchild
        this.dataSource.paginator = this.paginator;
        this.searchItem = res;//filter
        if (this.setcolumn) {
          for (let element of res)
            this.empNamerender.push(element[this.setcolumn])
        }

      },
      error: console.log,
    });
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        //alert("Employee deleted!");
        this._coreService.openSnackBar('Employee deleted!', 'Done');
        this.getEmployeeList();//automatically refresh the data or list
      },
      error: console.log,
    });
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpAddComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();             //if it is true it wll refresh data
        }
      }
    });
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['']);
  }
  //filters
  isEmpty: any
  isHide: boolean = true
  hideField: boolean
  searchItem: any
  setcolumn: any
  getAllhide: boolean = true
  empNamerender: any[] = []
  toggleFilter() {
    this.hideField = !this.hideField
  }
  IsSelectOperater() {
    this.isHide = false
    this.setcolumn = this.isEmpty;//column names
    this.ngOnInit()
    this.empNamerender = []

  }
  SearchItems() {

    let conv = this.searchItem.toString();
    this.dataSource.filter = conv;
    this.getAllhide = false
  }
  getAll() {
    this.isHide = true
    this.isEmpty = ''
    this.ngOnInit()
    this.getAllhide = !this.getAllhide
  }
  chartopen() {
    this.route.navigate(['linechart'])
  }


  //filter
  condition: string = '';
  selectedColumn: string = ''; // Selected column from the second dropdown
  filterValue: string = ''; // Value entered in the text box for the "contains" condition
  existingColumnValues: any[] = []; // Values for the selected existing column
  selectedColumnValues: any[] = []; // Selected values from the multiselect dropdown
  onConditionChange() {
    // Reset values when condition changes
    this.selectedColumn = '';
    this.filterValue = '';
    this.existingColumnValues = [];
    this.selectedColumnValues = [];
  }
  onColumnChange() {
    this.filterValue = '';
    this.existingColumnValues = [];
    this.selectedColumnValues = [];

    if (this.selectedColumn) {
      this.existingColumnValues = this.dataSource.data.map(row => row[this.selectedColumn]);
    }
  }
  applyFilter() {
    let filteredData = this.dataSource.data.slice(); // Create a copy of the data array

    switch (this.condition) {
      case 'is':
        filteredData = this.filteredData.filter(row => {
          return row[this.selectedColumn] === this.existingColumnValues
        })
        break;
      case 'is-any':
        if (this.selectedColumn && this.selectedColumnValues.length > 0) {
          filteredData = filteredData.filter(row => this.selectedColumnValues.includes(row[this.selectedColumn]));
        }
        break;

      case 'contains':
        if (this.selectedColumn && this.filterValue) {
          filteredData = filteredData.filter(row => row[this.selectedColumn].includes(this.filterValue));
        }
        break;

      case 'not-contains':
        this.filteredData = this.employees.filter((employee) => employee[this.selectedColumn] !== this.filterValue);
        break;

      default:
        break;
    }

    this.dataSource.data = filteredData; // Update the data source with the filtered data
  }


  //filters
  setColumn: any
  thecondition1: any
  setvalue: any
  renderinf: any[] = [];
  theConditions: any = ['is', 'is-Any', 'equal', 'notEqual', 'contains', 'Not Contains', 'Starts with', 'Ends with', 'isEmpty', 'is-notEmpty', 'is Not']


  Optionselect() {
    this.getEmployeeList();
    this.getInfo();
    this.filterselectedDetails();

  }
  getInfo() {
    this.renderinf = [];
    for (let el of this.filterst) {
      this.renderinf.push(el[this.setColumn])
    }
  }
  // filterst=this.dataSource
  filterselectedDetails() {
    switch (this.thecondition1) {
      case "is":
        this.dataSource = this.filterst.filter((item: any) => {
          return item[this.setColumn] === this.setvalue;
        });
        break;
      case "notEqual":
        this.dataSource = this.filterst.filter((item: any) => {
          return item[this.setColumn] !== this.setvalue
        });
        break;
      case "contains":
        this.dataSource = this.filterst.filter((item: any) => {
          return item[this.setColumn].includes(this.setvalue)
        }); break;

      case "Not Contains":
        this.dataSource = this.filterst.filter((item: any) => {
          return !item[this.setColumn].includes(this.setvalue);
        }); break;
      case "Starts with":
        this.dataSource = this.filterst.filter((item: any) => {
          return item[this.setColumn].toLowerCase().startsWith(this.setvalue.toLowerCase())
        }); break;

      case "Ends with":
        this.dataSource = this.filterst.filter((item: any) => {
          return item[this.setColumn].toLowerCase().endsWith(this.setvalue.toLowerCase())
        });
        break;
      case "is-Any":




    }

  }
  anyStore: any[] = []
  apply() {
    if (this.thecondition1 === 'is-Any') {
      this.anyStore = [];
      for (let getname of this.setvalue) {
        const arr = this.filterst.filter((item: any) => {
          return item[this.setColumn] === getname
        })
        console.log(arr);
        this.anyStore.push(...arr)
      }
      this.dataSource = this.anyStore
    }
  }
}
