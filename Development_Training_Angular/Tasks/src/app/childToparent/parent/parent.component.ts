import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  b=['a','b','c'];
  add(b:string){
    this.b.push(b);

  }

}
