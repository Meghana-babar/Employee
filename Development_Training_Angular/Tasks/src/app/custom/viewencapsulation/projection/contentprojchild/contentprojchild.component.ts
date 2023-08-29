import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contentprojchild',
  templateUrl: './contentprojchild.component.html',
  styleUrls: ['./contentprojchild.component.css']
})
export class ContentprojchildComponent {
  @Input() products:any=[];


}
