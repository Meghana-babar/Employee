import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tblStudent } from './studentTable.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private MyHttp: HttpClient, public toastr: ToastrService) { }

  baseUrl = 'https://localhost:7147/api/Student  ';

  studentList: tblStudent[] = []; // getting list of students

  getStudent: tblStudent = new tblStudent(); // insert and update

  /*GetStudentData(): Observable<any> {
    return this.MyHttp.get<any>(this.baseUrl);
  }*/
  GetStudentData(condition: string = '', value: string = '', values: string[] = []): Observable<any> {
    const params = new HttpParams()
      .set('condition', condition)
      .set('value', value)
      .set('values', values.join(','));
  
    return this.MyHttp.get<any>(`${this.baseUrl}`, { params });
  }
  
  GetCourseData(): Observable<any> {
    return this.MyHttp.get<any>(this.baseUrl);
  }

  InsertStudent() {
    return this.MyHttp.post(`${this.baseUrl}/Postdata`, this.getStudent)
  }

  updateStudent() {
    return this.MyHttp.put(`${this.baseUrl}/id?id=${this.getStudent.studentID}`, this.getStudent);
  }
  deleteStudent(id: any) {
    const url = `${this.baseUrl}/Stdid?id=${id}`;
    return this.MyHttp.delete(url);
  }
}
