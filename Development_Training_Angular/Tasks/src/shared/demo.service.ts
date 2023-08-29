import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor( private http:HttpClient) {
    
   }
   url='https://jsonplaceholder.typicode.com/users'

   turl='https://jsonplaceholder.typicode.com/posts/1'

   
   Get(){
   return this.http.get(this.url)
   }
}
