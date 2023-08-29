import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  showForm:FormGroup;
  constructor(){}
ngOnInit(): void {
  this.showForm=new FormGroup({
    name:new FormControl('search text')
  });
  this.showForm.get('name').valueChanges.pipe(
  //debounceTime(3000)
  filter((v)=>this.charCount(v))
  ).subscribe(data=>{
    console.log(data)
  })
}

readValue(){

}
charCount(v){
  return v.length<10 ? true:false;
}
//of
showInfo:boolean=false
student: Observable<string[]> = of(['megha', 'aru', 'adi', 'anu', 'chai']);
  studentName: Observable<string> = of('We can pass a string also');
  studentObj = {
    id: '011',
    name: 'chotu'
  };
  studentOb$: Observable<any> = of(this.studentObj);

  of(): void {
    this.student.subscribe(res => {
      console.log(res);
    });
    this.studentName.subscribe(res => {
      console.log(res);
    });
    this.studentOb$.subscribe(res => {
      console.log(res);
    });
  }
  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }

//map operator
srcAr=from([1,2,3,4])
multiplyby2(){
  this.srcAr.pipe(map(val=>{return val*2})).subscribe(data=>{
    console.log(data)
  })
}

}
