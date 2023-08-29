import { Component, Input, OnChanges, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamiccompo',
  templateUrl: './dynamiccompo.component.html',
  styleUrls: ['./dynamiccompo.component.css']
})
export class DynamiccompoComponent implements OnChanges {
 ngOnChanges(changes: SimpleChanges): void {
console.log(changes,"changes are made") }
 @Input() value:string

}
