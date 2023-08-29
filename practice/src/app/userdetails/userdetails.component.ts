import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
 @Input() item1:{name:string,email:string}={name:'',email:''};

}
