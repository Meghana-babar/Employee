import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
dataget:any;
  dataEmitter=new EventEmitter<string>();
  // dataEmitter:any
  lisst=[
    'meghana',
    'sneha',
    'Sharada'
  ]
raiseddata(data:string){
 
 this.lisst.push(data);
 this.bs.next(data);
 this.bsList();
};
 bs=new BehaviorSubject<any>(undefined);
 bsList(){
  this.bs.next(this.lisst);
 }

  constructor() { 
    this.bsList();
  }
  islogindata:boolean=false;
  login(){
    this.islogindata=true;
  }
  logout(){
    this.islogindata=false;
  }
  isauthenticated(){
    this.islogindata=true;
  }
}
