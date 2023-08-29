import { Component, Input, SimpleChange } from '@angular/core';
import { DemoService } from 'src/shared/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  //child component
@Input() value:string='meghana';
count:number=0
constructor(private service:DemoService){
  //it is not life cycle hook it is javascript feature.and aslo it is called 1st 
  console.log("constroctr called!")
  console.log(this.value);
}
ngOnInit(){
  console.log('ngOnInit called!');
  console.log(this.value);
  this.fetcdata()
}
ngOnChanges(change:SimpleChange){
  console.log('ngOnChanges called!!')
  console.log(change)
}
ngDoCheck(){
  this.count++
  console.log('ng do check it will get called every change detection cycle',this.count)
}
ngAfterContentInit(){
  console.log('ngAfterContentView This hook ll call only once during the 1st change detection cycle')
}
ngAfterContentChecked(){
  console.log('ngafterchecked will call when projected content gets changed')
}
ngAfterViewInit(){
  console.log('ngAfterViewInit it ll call all components view and ther child gets initialized and it will call only once when 1st change detection lyf cycle.')
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked ll get called every change in the change detection life cycle');
}
ngDestroy(){
  console.log('it ll call only when components gets destroyed')
}

fetcdata(){
this.service.Get().subscribe((res)=>{
  console.log(res)
})
}
}
