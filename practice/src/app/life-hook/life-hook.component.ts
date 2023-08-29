import { Component, Input, OnChanges, OnInit, } from '@angular/core';

@Component({
  selector: 'app-life-hook',
  templateUrl: './life-hook.component.html',
  styleUrls: ['./life-hook.component.css']
})
export class LifeHookComponent implements OnChanges{
@Input() paretData:string;
mega: string;

  ngOnInit(){

  }
  ngOnChanges(){
    console.log("onchanges loged");
  }

}
