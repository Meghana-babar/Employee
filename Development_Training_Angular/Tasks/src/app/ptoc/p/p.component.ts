import { Component } from '@angular/core';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css']
})
export class PComponent {

  parentdata:string="sending data to parent to chld";
pdata:string="it sss"
  childadata:string;

  open(value:any)
{
  this.childadata=value;
}

anotherparentdata:string="another parent data";

meghsdata:string;
bv(c:any){
  this.meghsdata=c;
}

//ngonchanges
ngchanes:string="ngonchanges exampe";
constructor(){
  //this.ngchanes="another ngonchanges"
}
}
