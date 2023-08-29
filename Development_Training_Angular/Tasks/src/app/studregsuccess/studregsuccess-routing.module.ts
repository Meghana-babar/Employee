import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudregsuccessComponent } from './studregsuccess.component';

const routes: Routes = [{ path: '', component: StudregsuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudregsuccessRoutingModule { }
