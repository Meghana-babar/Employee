import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudService {

  constructor(private http:HttpClient) { }

  postStudent(data:any){
    return this.http.post<any>("https://localhost:44344/insert",data.this.httpOptions).subscribe();
    
  }
  getstudent(){
    return this.http.get("https://localhost:44344/get").subscribe();
  }
  updatestudent(data:any){
    return this.http.put("https://localhost:44344/update",data.httpOptions).subscribe();
  }
  deletestudent(mobile:any){
    return this.http.delete("https://localhost:44344/delete"+mobile.mobile);

  }
}
