import { Component } from '@angular/core';
import { GuardService } from '../guard.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
constructor(private http:GuardService){}

  activate(){
    this.http.getiflogin(true)
  }
}
