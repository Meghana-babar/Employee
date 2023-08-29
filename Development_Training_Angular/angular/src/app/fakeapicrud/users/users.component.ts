import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any
  constructor(private _auth:AuthService){}
  ngOnInit(): void {
    this._auth.getUser().subscribe(data=>{
      this.users=data;
    },(err)=>{
      console.log('unable to get url'+err)
    })
  }
  

}
