import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-noti',
  templateUrl: './noti.component.html',
  styleUrls: ['./noti.component.css']
})
export class NotiComponent {
  constructor(private _notification:AuthService){}
  sendMsg(data:any){
  this._notification.sendNotification(data.value)
  }
}
