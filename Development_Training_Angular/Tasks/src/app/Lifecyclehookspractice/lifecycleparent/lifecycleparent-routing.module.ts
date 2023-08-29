import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleparentComponent } from './lifecycleparent.component';

const routes: Routes = [{ path: '', component: LifecycleparentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleparentRoutingModule { }
