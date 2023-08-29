import { Component } from '@angular/core';

@Component({
  selector: 'app-contentprojparent',
  templateUrl: './contentprojparent.component.html',
  styleUrls: ['./contentprojparent.component.css']
})
export class ContentprojparentComponent {
  salesProducts:[
    {id:1,name:'iphone',price:2200},
    {id:2,name:'laptop',price:4500}
  ]
topProducts:[
  {id:1,name:'iphone',dessc:"bcxg"},
  {id:2,name:'laptop',desc:"cxvsht"}
]
}
