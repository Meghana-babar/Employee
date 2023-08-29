import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  message:Observable<string>;
  name:string
  ngOnInit(){
    this.message=new Observable(
      function(observer){
        try{
           observer.next('meghana'),
           setInterval(res=>{
            observer.next('ramya')

           },3000),
           setInterval(res=>{
            observer.next('sound')
           })
        }
        catch(e){
         observer.error(e);
        }
      }
    );
    this.message.subscribe(res=>{
    this.name=res
    })
  }
}
