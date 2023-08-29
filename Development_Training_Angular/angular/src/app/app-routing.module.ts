import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtcComponent } from './ptc/ptc.component';
import { CtpComponent } from './ctp/ctp.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { StandaloneComponent } from './standalone/standalone.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { GuardService } from './guard.service';
import { LetandvarComponent } from './letandvar/letandvar.component';
import { PipcompComponent } from './custompipe/pipcomp/pipcomp.component';
import { NgforComponent } from './directive/ngfor/ngfor.component';
import { CandyComponent } from './guard/candy/candy.component';
import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';
import { EmpFormComponent } from './crud/emp-form/emp-form.component';
import { SubformComponent } from './subform/subform.component';
import { NoneComponent } from './ViewEncapsulation/none/none.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmpFComponent } from './cr/emp-f/emp-f.component';
import { PiechartComponent } from './piechart/piechart.component';
import { OfComponent } from './Rxjs/of/of.component';
import { FromComponent } from './Rxjs/from/from.component';
import { NotiComponent } from './subject/noti/noti.component';
import { UsersComponent } from './fakeapicrud/users/users.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'ptc',component:PtcComponent,canActivate:[GuardService]},
  {path:'sint',component:StringInterpolationComponent},
  {path:'ctp',component:CtpComponent},
  {path:'letvar',component:LetandvarComponent},
  {path:'cpipe',component:PipcompComponent},
  {path:'ngfor',component:NgforComponent},
  {path:'dynamiccomponent',component:DynamicComponent},
  {path:'reactive',component:ReactiveformComponent},
  {path:'observable',component:ObservableComponent},
  {path:'standalone',component:StandaloneComponent},
  {path:'inbuilt',component:InbuiltpipeComponent},
  {path:'cand',component:CandyComponent,canDeactivate:[GuardService]},
  {path:'empform',component:EmpFormComponent},
  {path:'subForm',component:SubformComponent},
  {path:'ve',component:NoneComponent},
  {path:'user',component:UserComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'viewtickek',component:AdmindashboardComponent},
  {path:'cr',component:EmpFComponent},
  {path:'pie',component:PiechartComponent},
  {path:'of',component:OfComponent},
  {path:'from',component:FromComponent},
  {path:'subject',component:NotiComponent},
  {path:'api',component:UsersComponent},
  {path:'dem',component:EmployeeregistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
