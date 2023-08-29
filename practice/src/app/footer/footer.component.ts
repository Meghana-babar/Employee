import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private userdata:UserdataService){}
  

getdata(){
  const data=this.userdata.getdata();
  console.log(data);
}


}
