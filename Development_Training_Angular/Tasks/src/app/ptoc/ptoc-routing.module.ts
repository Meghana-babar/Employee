import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PComponent } from './p/p.component';

const routes: Routes = [
  {path:'',component:PComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtocRoutingModule { }
