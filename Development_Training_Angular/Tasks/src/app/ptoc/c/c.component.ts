import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent {
  @Input() usernsme:string='';

  @Output() user=new EventEmitter<string>();
  msg="it is child to parent";
  @Input() ngonch:string;
  lyfhok:any
  ctop(){
    this.user.emit(this.msg)
  }

  ngOnInit(){
    console.log("ngoninit")
  }

  ngOnchanges(changes:SimpleChanges){
   this.lyfhok++;
    }
  
   
  

}
