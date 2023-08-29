import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { studentComponent } from './Student-info/student.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { LoginGuardService } from './login-guard.service';
import { AuthService } from './auth.service';
import { GuardsGuard } from './guards.guard';

const routes: Routes = [
  {
    path:'',component:LoginComponent},
  {
    path:'stud',component: StudentDeleteComponent,canActivate:[LoginGuardService],canDeactivate:[GuardsGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
