import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-orm',
  templateUrl: './reactive-orm.component.html',
  styleUrls: ['./reactive-orm.component.css']
})
export class ReactiveOrmComponent {
  reactive:FormGroup
  ngOnInit(){
    this.reactive=new FormGroup({
      firstname:new FormControl(),
      lastname:new FormControl(),
      email:new FormControl(),
      phone_no:new FormControl(),
      department:new FormControl()

    })
  }

}
