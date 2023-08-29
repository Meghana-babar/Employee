import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-notificationsubscribe',
  templateUrl: './notificationsubscribe.component.html',
  styleUrls: ['./notificationsubscribe.component.css']
})
export class NotificationsubscribeComponent implements OnInit {
  notificationMessage:string
  constructor(private _notification:AuthService){}
  ngOnInit(): void {
    this._notification.notificationSubject.subscribe((d)=>{
      this.notificationMessage=d
    });
  }
}
