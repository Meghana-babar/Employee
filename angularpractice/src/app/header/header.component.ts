import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogan="Gain Loads of Knowledge";
  source:string="E:\CRUD\prc.jpg";
  displaynotification:boolean=false;

  display(){
    this.displaynotification=true;
  }

}
