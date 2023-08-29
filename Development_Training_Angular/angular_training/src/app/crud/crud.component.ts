import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
users:any

  constructor(private _authservice:AuthService){}
  ngOnInit(){
    // this._authservice.get().subscribe(res=>{ /////????? get is not there in auth service  i know am trying different ways i created g
    //    this.users=res
    // })
    //console.log(this.users)
    this._authservice.getuser().subscribe(res=>
      this.users=res)
      console.log(this.users)

  }
   
 

}
