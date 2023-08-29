import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-ctp',
  templateUrl: './ctp.component.html',
  styleUrls: ['./ctp.component.css']
})
export class CtpComponent {
  @Input() hdata:string='';
  @Output() childmsg:any=new EventEmitter<string>()
  ctp(val:string){
    this.childmsg.emit(val)
  }

}
