import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childviewchild',
  templateUrl: './childviewchild.component.html',
  styleUrls: ['./childviewchild.component.css']
})
export class ChildviewchildComponent {
  sayhello(){
    console.log("using view child elemet transferring the data child to parent")
  }

  mood:string="my mood is not good today";
  @Input() msg:string="";
  

}
