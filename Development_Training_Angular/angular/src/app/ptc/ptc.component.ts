import { Component } from '@angular/core';

@Component({
  selector: 'app-ptc',
  templateUrl: './ptc.component.html',
  styleUrls: ['./ptc.component.css']
})
export class PtcComponent {
Message:string="This data is coming from Parent to Child";
msg:string=''
ctp(data:any){
  this.msg=data
}


}
