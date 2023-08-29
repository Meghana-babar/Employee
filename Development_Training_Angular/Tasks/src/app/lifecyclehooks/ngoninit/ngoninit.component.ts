import { Component } from '@angular/core';

@Component({
  selector: 'app-ngoninit',
  templateUrl: './ngoninit.component.html',
  styleUrls: ['./ngoninit.component.css']
})
export class NgoninitComponent {
  //parent component
  inputtext:string='';
  destroy:boolean=true;
  onsubmit(inptel:HTMLInputElement){
this.inputtext=inptel.value;
  }
  destroycom(){
    this.destroy=false
  }
}
