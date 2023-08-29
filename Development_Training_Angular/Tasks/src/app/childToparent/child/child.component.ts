import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent1 {
  @Output() newitem=new EventEmitter<string>();
  add(a:string){
this.newitem.emit(a);
  }

}
