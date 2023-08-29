import { Component, OnInit } from '@angular/core';
import {  from } from 'rxjs';
import {  filter,map } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit{

  constructor(private _auth:AuthService){
    this.ngOnInit();
  }
array1=[1,2,3,4,5]
array2=['a','s','d']

observable=from(this.array1);
transformob=this.observable.pipe(map((val)=>{
  return val *5;
}))
filterdata=this.transformob.pipe(filter((val)=>{
  return val  <= 10
}))

ngOnInit(){
  // this.receveddata=this._auth.senddata();
  // this.filterdata.subscribe((val)=>{
  //   console.log(val);
  // },(error)=>{
  //   alert(error.message)
  // }, ()=>{
  //   alert('observalbe emitting')
  // });

  // this._auth.dataEmitter.subscribe((val)=>{
  //   this.inputtext=val
  // })
   this._auth.bs.subscribe(res=>{this.receveddata=res;
  console.log(res)})
}
ok(){
  this.ngOnInit();
}
receveddata:any;
inputtext:string;
}
