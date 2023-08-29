import { Component, ComponentRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MobileComponent } from '../mobile/mobile.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { PizzaComponent } from '../pizza/pizza.component';
import { BurgerComponent } from '../burger/burger.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
@ViewChild('container',{read:ViewContainerRef,static
:true})
container!:ViewContainerRef
components=new Map<string, ComponentRef<any>>();
index:number=0;
productNames:any={
  mobile:'mobile',
  laptop:'laptop',
  pizza:'pizza',
  burger:'burger'

}

createComponent(componentName:string){
  //this.container.clear();
  const componentType=this.getComponentType(componentName)
  const uniqueName=componentName+'-'+this.index.toString();
  const component=this.container.createComponent(componentType);
  component.instance.name=uniqueName;
  component.instance.closed.subscribe((res:any)=>
  {
    this.deleteComponent(res.name)
  });
  this.components.set(uniqueName,component);
  this.index++;
}

getComponentType(name:string): Type<any>
{
  let type: Type<any>=MobileComponent;
  switch(name){
  case this.productNames.mobile:{
    type=MobileComponent;
    break;
  }
  case this.productNames.laptop:{
    type=LaptopComponent;
    break;
}
case this.productNames.pizza:{
  type=PizzaComponent;
  break;
}
case this.productNames.burger:{
  type=BurgerComponent;
  break;
}

}
return type;
}
deleteComponent(componentName:string){
if(this.components.has(componentName))
this.components.get(componentName)?.destroy();
this.components.delete(componentName);
}

}
