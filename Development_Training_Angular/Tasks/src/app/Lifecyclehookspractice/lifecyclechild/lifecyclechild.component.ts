import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DemoService } from 'src/shared/demo.service';

@Component({
  selector: 'app-lifecyclechild',
  templateUrl: './lifecyclechild.component.html',
  styleUrls: ['./lifecyclechild.component.css']
})
export class LifecyclechildComponent  {
  
@Input() onin:any;
@Input() p:any;
@Input() a:any;
@Input() data:any
id:number;
constructor(private http:HttpClient,private dservice:DemoService){
  
}
ngOnInit(){
  this.fetchdata()
}
ngOnChanges(changes:SimpleChanges){
  console.log("ngonchanges called",changes)

}
fetchdata(){
  this.dservice.Get().subscribe((res)=>{
  console.log(res=this.data)
  })
}
ngDocheck(){
  this.id++;
  console.log("ngdocheck called" ,this.id)
}

}
