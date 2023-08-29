import { Component } from '@angular/core';
import { pipe, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.css']
})
export class RxjsoperatorsComponent {
  rxjsoperators(){
    const v=of(10,20,30);
    const getdata=pipe(
      filter((x:number) => x!=1),
      map((y:number) => y*2))

      const vah=getdata(v)
      v.subscribe(x=> console.log(x))

    

  }

}
