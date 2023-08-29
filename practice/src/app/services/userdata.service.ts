import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users1(){
     [
      {name:'taehyung',email:'taehyung@gmail.com'},
      {name:'jenni',email:'jenni@gmail.com'}
    ];
  }


  getdata(): string{
    return "meghana is a gud girl";

  }
}
