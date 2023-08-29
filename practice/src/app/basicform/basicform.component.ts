import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent {
  userdata:any={};
  save(data:NgForm){
 console.warn(data);
 this.userdata=data;
  }

}
