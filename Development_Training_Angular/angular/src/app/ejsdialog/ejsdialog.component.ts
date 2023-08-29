import { Component } from '@angular/core';

@Component({
  selector: 'app-ejsdialog',
  templateUrl: './ejsdialog.component.html',
  styleUrls: ['./ejsdialog.component.css']
})
export class EjsdialogComponent {
option1:any
option2:any
option3:any
Employee:string[]=['Taeng','Can','johnbae']
condition:string[]=['is-any','contains']
Designation:string[]=['Developer','Marketing','Sales']
isEmployee:boolean=false
isDesignation:boolean=false
column=['Employee','Designation']
change(){
if(this.option1=='Employee')
{
  this.isEmployee=true
  this.isDesignation=false
}
else if(this.option2=='Designation'){
  this.isEmployee=false
  this.isDesignation=true
}
}

}
