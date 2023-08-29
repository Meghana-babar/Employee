import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective1]'
})
export class Customdirective1Directive {
style:boolean=false
  constructor(private elm:ElementRef) { 
    if(this.style==true)
    {
      elm.nativeElement.style.color="red";

    }
    else
    {
      elm.nativeElement.style.color="green";

    }
  }

}
