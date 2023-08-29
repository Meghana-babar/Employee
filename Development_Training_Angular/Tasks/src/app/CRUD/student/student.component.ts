import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
allstudents:Student[]=[]
  ngOnInit(){
  }
  fetchstud(){
    this.fetchstud()
  }
  constructor(private http:HttpClient){}

  onsubmit(students:{sname:string;age:number;branch:string}){
    this.http.post('http://localhost:3000/student',students).subscribe((res)=>{
      console.log(res)
    })

  }
  private fetchstudent(){
    this.http.get('http://localhost:3000/student')
    .pipe(map((res)=>{
      const students=[]
      for(const key in students){
        if(res.hasOwnProperty(key))
      {
        students.push({...[key],id:key})
      }

      }
      return students;
    }
    ))
    .subscribe((students)=>{
     
      console.log(students);
      this.allstudents=students
    })
  }
  ondelete(id:string){
    this.http.delete('http://localhost:3000/student/'+id).subscribe()

  }

}
