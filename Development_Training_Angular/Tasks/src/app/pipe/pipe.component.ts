import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  currentdate:Date=new Date() ;
  price:number=1222.12;
  name:string="MEGHANA BABAR"
  arr:string[]=['megha','babr','bhf']
  uname:string="meghana babar"

}
