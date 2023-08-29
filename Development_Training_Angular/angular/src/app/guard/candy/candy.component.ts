import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent {
name:FormControl=new FormControl()
canleave():boolean
{
  if(this.name.dirty)
  {
    return window.confirm("You have some changes save it before changing");
  }
  return true;
}
}
