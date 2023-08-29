import { HttpClient } from '@angular/common/http';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycleparent',
  templateUrl: './lifecycleparent.component.html',
  styleUrls: ['./lifecycleparent.component.css']
})
export class LifecycleparentComponent {
ngoninit:any="ngoninit calling"
 
updateddata(){
  this.ngoninit="updated ngonunt"
}
derivedvalue=12;
previousvalue=10;
  
  /*ngOnInit(){
console.log('parent ngoninit() called');
this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
  console.log(res)
  this.users=res;
})
  }
  ngOnchanges(changes:SimpleChanges){
    console.log('parent ngonchanges() called')
    console.log(changes)


  }
  ngDocheck(){
    console.log('ngDocheck() is called')
  }*/
  
  
}
