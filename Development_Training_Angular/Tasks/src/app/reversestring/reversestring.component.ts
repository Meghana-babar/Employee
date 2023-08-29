import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversestring',
  templateUrl: './reversestring.component.html',
  styleUrls: ['./reversestring.component.css']
})
export class ReversestringComponent implements OnInit {
  string:any;
  reversestringdata:string;
  ngOnInit() {
    
  }
  reversestring(str:string){
  // let word:string="";
  let reverse="";
  
  for(let i=str.length-1;i>=0;i--)
  {
    reverse+=str[i];
  }
  return this.reversestringdata=reverse;
 }
 //reverse string using foreach loop
 locl:any;
 ow:any;
foreach(){
  let str:string="welcome";
  let r:string="";
  for(let c of str)
  {
    r=c+r;
  }
  this.ow=str;
  this.locl=r;
  
  
}
}

