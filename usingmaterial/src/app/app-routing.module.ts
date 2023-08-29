import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'Employeedashboard',component:EmployeedashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
