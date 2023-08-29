import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY='API123'
    const headers2=new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken':'1234565'
    });
    const authToken='0123megha'
    const authRes=request.clone({
     setHeaders:{
      Authorization:`Babar ${authToken}`
     }
    });
    const Role_Key='R1234'
  return next.handle(authRes);
   // return next.handle(request.clone({setHeaders:{API_KEY},headers:headers2}));
  }
}
