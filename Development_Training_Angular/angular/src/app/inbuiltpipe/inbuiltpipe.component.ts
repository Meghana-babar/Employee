import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent {
  currentdate:Date=new Date() ;
  price:number=1222.12;
  name:string="MEGHANA BABAR"
  arr:string[]=['megha','babr','bhf']
  uname:string="meghana babar"

}
