import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleparentRoutingModule } from './lifecycleparent-routing.module';
import { LifecycleparentComponent } from './lifecycleparent.component';
import { LifecyclechildModule } from "../lifecyclechild/lifecyclechild.module";


@NgModule({
    declarations: [
        LifecycleparentComponent
    ],
    imports: [
        CommonModule,
        LifecycleparentRoutingModule,
        LifecyclechildModule
    ]
})
export class LifecycleparentModule { }
