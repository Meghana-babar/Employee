import { Component, OnInit } from '@angular/core';
import { Observable, from, observable } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
ngOnInit(): void {
//this.dept.subscribe(res=>{console.log(res)})
}
// Department$:Observable<string>=from(['this.depart'])
// depart=['fashion','it','ca']

//dept:Observable<any>=from(['a','b','c'])
dept: Observable<any>;
  showDepartments: boolean = false;

  onButtonClick(): void {
    this.dept = from(['a', 'b', 'c']);
    this.showDepartments = true;
  }
}
