import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoopsComponent } from './loops/loops.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BasicformComponent } from './basicform/basicform.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {path:'loops',component:LoopsComponent},
  {path:'childtoparent',component:ChildtoparentComponent},
  {path:'templatereferencevariable',component:TemplatereferencevariableComponent},
  {path:'todolist',component:TodoListComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'basicform',component:BasicformComponent},
  {path:'about',component:AboutComponent ,
  children:[
    {path:'aboutc',component:AboutCompanyComponent},
     {path:'aboutme',component:AboutMeComponent}
  
   ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
