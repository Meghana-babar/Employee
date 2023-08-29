import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecyclechildRoutingModule } from './lifecyclechild-routing.module';
import { LifecyclechildComponent } from './lifecyclechild.component';


@NgModule({
  declarations: [
    LifecyclechildComponent
  ],
  imports: [
    CommonModule,
    LifecyclechildRoutingModule
  ],
  exports:[LifecyclechildComponent]
})
export class LifecyclechildModule { }
