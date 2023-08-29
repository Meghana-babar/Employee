import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecyclechildComponent } from './lifecyclechild.component';

const routes: Routes = [{ path: '', component: LifecyclechildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecyclechildRoutingModule { }
