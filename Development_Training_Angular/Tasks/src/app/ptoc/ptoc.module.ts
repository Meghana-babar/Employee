import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtocRoutingModule } from './ptoc-routing.module';
import { ViewchildparentComponent } from './viewchildparent/viewchildparent.component';
import { ChildviewchildComponent } from './childviewchild/childviewchild.component';


@NgModule({
  declarations: [
    
  
    ViewchildparentComponent,
            ChildviewchildComponent
  ],
  imports: [
    CommonModule,
    PtocRoutingModule
  ],
  exports:[]
})
export class PtocModule { }
