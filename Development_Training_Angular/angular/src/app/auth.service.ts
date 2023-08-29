import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {  of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,private route:Router) { }
  private url1 = 'http://localhost:3000/'
  Getemployee() {
    this._http.get(this.url1);
  }

  private url = "https://localhost:7272/api/EmployeeController"
  addEmployee(data: any): Observable<any> {
    return this._http.post(`${this.url}/AddEmployee`, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${this.url}/UpdateEmployee/${id}`, data);
  }


  getEmployeeList(): Observable<any> {
    return this._http.get(`${this.url}/GetEmployees`);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.url}/deleteEmployee/${id}`);
  }

  loggedIn: boolean = false;
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  isAuthenticated() {
    return this.loggedIn;
  }

  //chart
  getchart() {
    return this._http.get('https://localhost:7272/gtdat ');
  }

  getPie() {
    return this._http.get('https://localhost:7272/GetGenderCounts')
  }

  apiurl: "http://localhost:3000/"
  GetUserBycode(id: any) {
    return this._http.get(this.apiurl + '/' + id);
  }
  registerUser(inputdata: any) {
    return this._http.post(this.apiurl, inputdata)
  }
  GetTicketbyCode(id: any) {
    return this._http.get("http://localhost:3000/ticket" + '/' + id);
  }
  GetAll() {
    return this._http.get(this.apiurl);
  }
  postTicket(data: any) {
    return this._http.post<any>("http://localhost:3000/ticket/", data);
  }
  getTicket() {
    return this._http.get<any>("http://localhost:3000/ticket");
  }
  updateTicket(id: any, data: any) {
    return this._http.put("http://localhost:3000/ticket" + '/' + id, data);
  }
  updateUser(id: any, inputdata: any) {
    return this._http.put(this.apiurl + '/' + id, inputdata);
  }
  isloggedin() {
    return sessionStorage.getItem('id') != null;
  }
  getrole() {
    return this._http.get("")
  }

  //subject
  notificationSubject: Subject<string> = new Subject<string>();
  sendNotification(data) {
    this.notificationSubject.next(data.value);
  }

  //fakeapicrud
  getUser(){
    // const headers2=new HttpHeaders({
    //   'content-type':'application/json',
    //   'authenticationToken':'1234565'
    // });
    const params2=new HttpParams()
    .set('pageNum','10')
    .set('pageSize','100');
    return this._http.get('https://jsonplaceholder.typicode.com/users',{params:params2})
  }


  //demoproject
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout1() {
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }

  login1({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  private apiUrl = 'http://localhost:3000/employees';


  addEmployeed(employee: any): Observable<any> {
    return this._http.post(this.apiUrl, employee);
  }
}
