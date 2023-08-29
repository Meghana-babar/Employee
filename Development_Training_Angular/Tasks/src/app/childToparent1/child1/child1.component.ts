import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Output() c=new EventEmitter<string>
  passdata(){
    this.c.emit("child data");
  }

}
