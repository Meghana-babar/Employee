import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LetandvarComponent } from './letandvar/letandvar.component';
import { StringComponent } from './string/string.component';
import { ReversestringComponent } from './reversestring/reversestring.component';

import { GuardsGuard } from './guards.guard';
import { StudeComponent } from './stude.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { LoginformComponent } from './loginform/loginform.component';

import { Child1Component } from './childToparent1/child1/child1.component';
import { DemoComponent } from './lifecyclehooks/demo/demo.component';
import { NgoninitComponent } from './lifecyclehooks/ngoninit/ngoninit.component';
import { ParentComponent } from './parenttochildcomponent/parent/parent.component';
import { ProductsComponent } from './CRUD/products/products.component';
import { StudentComponent } from './CRUD/student/student.component';
import { ViewchildparentComponent } from './ptoc/viewchildparent/viewchildparent.component';
import { BasicsComponent } from './basics/basics.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustompipesPipe } from './custompipes.pipe';
import { CustompipescompoComponent } from './custompipescompo/custompipescompo.component';
import { CustomdcompComponent } from './custom/customdcomp/customdcomp.component';
import { ContentprojchildComponent } from './custom/viewencapsulation/projection/contentprojchild/contentprojchild.component';
import { SingleslotComponent } from './contentprojection/singleslot/singleslot.component';
import { Task1Component } from './task1/task1.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { Reactiveform1Component } from './forms/reactiveform/reactiveform1/reactiveform1.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CompoComponent } from './rxjs/compo/compo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'letvar',component:LetandvarComponent},
  {path:'string',component:StringComponent},
  {path:'reverse',component:ReversestringComponent},
  { path: 'studentRegistration', loadChildren: () => import('./student-registration/student-registration.module').then(m => m.StudentRegistrationModule),canActivateChild:[GuardsGuard] },
  { path: 'studregsuccess', loadChildren: () => import('./studregsuccess/studregsuccess.module').then(m => m.StudregsuccessModule) },
  {path:'ngfor',component:NgforComponent},
  {path:'login',component:LoginformComponent,canActivate:[GuardsGuard]},
  {path:'stud',component:StudeComponent,canDeactivate:[GuardsGuard]},
  // {path:'parentochild',component:ParentComponent},
  {path:'childtoparent',component:Child1Component},
  {path:'lychooks',component:DemoComponent},
  {path:'demo',component:NgoninitComponent},
  { path: 'c', loadChildren: () => import('./ptoc/c/c.module').then(m => m.CModule) },
  { path: 'p', loadChildren: () => import('./ptoc/p/p.module').then(m => m.PModule) },
  {path:'ptoc',loadChildren:()=>import('./ptoc/ptoc.module').then(m=>m.PtocModule)},
  { path: 'c2', loadChildren: () => import('./ptoc/c2/c2.module').then(m => m.C2Module) },
  {path:'products',component:ProductsComponent},
  {path:'students',component:StudentComponent},
  {path:'viewc',component:ViewchildparentComponent},
  { path: 'lifecycleparent', loadChildren: () => import('./Lifecyclehookspractice/lifecycleparent/lifecycleparent.module').then(m => m.LifecycleparentModule) },
  { path: 'lifecyclechild', loadChildren: () => import('./Lifecyclehookspractice/lifecyclechild/lifecyclechild.module').then(m => m.LifecyclechildModule) },
  {path:'basics',component:BasicsComponent},
  {path:'pipe',component:PipeComponent},
  {path:'custompipe',component:CustompipescompoComponent},
  {path:'customdirective',component:CustomdcompComponent},
  {path:'content-projection',component:SingleslotComponent},
  {path:'task',component:Task1Component},
  {path:'leave',component:ReactiveformComponent},
  {path:'reactiveform',component:Reactiveform1Component},
  {path:'rxjs',component:RxjsComponent},
  {path:'comp',component:CompoComponent}
  
  // { path: 'parent', loadChildren: () => import('./parent-child/parent/parent.module').then(m => m.ParentModule) },
  // { path: 'child', loadChildren: () => import('./parent-child/child/child.module').then(m => m.ChildModule) },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
