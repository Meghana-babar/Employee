import { Component, OnInit } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice';
  users=[{
    name:'meghana',email:'abc@gmail.com',accounts:['fb','insta']
  },
{name:'vac',email:'abf@gmail.com',accounts:['fb','insta']}];

data=10;

updatechild(){
  this.data=Math.floor(Math.random()*10);
}

userdetails:[{
  name:'meghana',email:'meghan@gmail.com'
},
{
name:'gdv',email:'gdv@gmail.com'
}];

m="x";
updatedata(i:string){
console.warn(i);
this.m=i;
}

name:any;

date="2020-08-08";

memberData=[
  {name1:'meghana',email:'meghana@gmail.com'},
  {name1:'sam',email:'sam@gmail.com'},
  {name1:'vijay',email:'vijay@gmail.com'}
];

servicedata:any;
constructor(private userdata:UserdataService){
  console.warn("userdata",userdata.users1());
  this.servicedata=this.userdata.users1()

}
  ngOnInit(): void {
    console.log("constructor called");
  }
getdata():void{
  const dataaa=this.userdata.getdata();
  console.log(dataaa);

}
mega:string;
handleData(e){
this.mega=e.target.Value;
}
}
