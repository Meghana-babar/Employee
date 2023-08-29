import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpEditComponent } from '../emp-edit/emp-edit.component';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {
displayedColumns:string[]=[
  'id',
  'firstname',
  'lastname',
  'email',
  'dob',
  'gender',
  'education',
  'company',
  'experience',
  'package',

]
  constructor(private _dialog:MatDialog){}

  openAddEditForm(){
   this._dialog.open(EmpEditComponent);
  }
}
