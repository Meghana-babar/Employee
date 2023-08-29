import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildviewchildComponent } from '../childviewchild/childviewchild.component';

@Component({
  selector: 'app-viewchildparent',
  templateUrl: './viewchildparent.component.html',
  styleUrls: ['./viewchildparent.component.css']
})
export class ViewchildparentComponent {
  @ViewChild('dateInput') dateofBirth:ElementRef;
  @ViewChild('ageInput') age:ElementRef;
  @ViewChild(ChildviewchildComponent) democp:ChildviewchildComponent;
  @ViewChild(ChildviewchildComponent) d2:ChildviewchildComponent;

  calculateage(){
    let birthyea=new Date(this.dateofBirth.nativeElement.value).getFullYear()
    let currentyea=new Date().getFullYear()
    let Age=currentyea-birthyea;
    this.age.nativeElement.value=Age
    
  }

  message:string="Life cycle hooks parent to child";

}
