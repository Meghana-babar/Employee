import { Component,Input,ViewChild,ViewContainerRef,ViewEncapsulation } from '@angular/core';
import { DynamiccompoComponent } from './dynamiccompo/dynamiccompo.component';
import { Dynamiccompo1Component } from './dynamiccompo1/dynamiccompo1.component';

const componentsConfig=[
  {
      component:()=>import ('./dynamiccompo/dynamiccompo.component').then(it=>it.DynamiccompoComponent),
      inputs:{
        name:'dynamic one'
      }
  },
  {
    component:()=>import ('./dynamiccompo1/dynamiccompo1.component').then(it=>it.Dynamiccompo1Component),
    inputs:{
      name:'dynamic one'
    }
}
  
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Tasks';
  @ViewChild('container',{read:ViewContainerRef})
  container!:ViewContainerRef;

  createcontainsBased(){
    componentsConfig.forEach(async(componentsConfig)=>{
      const componntInstance=await componentsConfig.component();
      const componentsref=this.container.createComponent(componntInstance);

      Object.entries(componentsConfig.inputs).forEach( ([key, value])=>{
        componentsref.setInput(key,value)
      });
    })
  }

  createcomponent(){
    this.container.clear()
    const dynamicre=this.container.createComponent(DynamiccompoComponent);
    dynamicre.setInput('value','ghghh');
    const dynamicref1=this.container.createComponent(Dynamiccompo1Component);
    dynamicref1.setInput('name','paul');
  }

}
