import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
httpoptions={
   headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
  constructor(private http:HttpClient) { }
use:user[]=[]

  // url = "https://crudcrud.com/api/349549537ebf44c1a8dede58ddd93742/resource"
   get(){
    //  const headers=new HttpHeaders({
    //    'content-type':'application/json',
    //   //  'applicationToken':'1234565'
    //  });
    //  const params=new HttpParams()
    //  .set('pageNum',10)
    //  .set('pageSize',100)
    //  return this.http.get(this.url,{headers:headers,params:params});
   }
  getuser(): Observable<user> {
    return this.http.get<user>("https://crudcrud.com/api/48182dc9d0d942a19c3d76ccdfe5e4c8/resource")
  }
  adduser(data:any){
return this.http.post<any>("https://crudcrud.com/api/48182dc9d0d942a19c3d76ccdfe5e4c8/resource",data,this.httpoptions);
  }

}

interface user {
  name:string,
  id:number,
  phonenumber:string
}
