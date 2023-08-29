import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  leavedata:FormGroup
  store:any[]=[];
  ngOnInit(){
    this.leavedata=new FormGroup({
      name:new FormControl(''),
      fromdate:new FormControl(''),
      enddate:new FormControl(''),
      reason:new FormControl('')
    })
  }
  submit(){
    this.store.push(this.leavedata.value)
    console.log(this.store)
  }
  edit(a:any){
   this.leavedata.patchValue({
    name:a.name,
    fromdate:a.fromdate,
    enddate:a.enddate,
    reason:a.reason

   });

  }

}
