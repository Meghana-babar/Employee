import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  fruits=[
    {name:'mango',color:'yellow'},
    {name:'grapes',color:'green'},
    {name:'banana',color:'yellow'}
  ];

}
