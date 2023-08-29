import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component {

@Input() anochi:string='';
@Output() ananachil=new EventEmitter<string>()
md="another child to paret"
mddd(){
  this.ananachil.emit(this.md)
}

}
