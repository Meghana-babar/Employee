import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './Forms/reactiveform/reactiveform.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { RxjsoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { EmpFormComponent } from './emp-form/emp-form.component';

const routes: Routes = [
  {path:'reactive',component:ReactiveformComponent},
{path:'template',component:TemplateDrivenComponent},
{path:'rxjs',component:RxjsoperatorsComponent},
{path:'emp',component:EmpFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
