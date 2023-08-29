import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letandvar',
  templateUrl: './letandvar.component.html',
  styleUrls: ['./letandvar.component.css']
})
export class LetandvarComponent {
  constructor(private route:Router){}
  
  letvariabledemo(){
    
    let x=1;
    if(true)
    {
      let x=2;
      console.log(x);
    }
    console.log(x);

  }

  varvariabledemo(){
    var y=2;
    if(true)
    {
      var y=4;
      console.log(y);
    }
    console.log(y);
  }
  back(){
this.route.navigate([''])
  }

}
