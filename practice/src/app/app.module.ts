import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoopsComponent } from './loops/loops.component';
import { BasicformComponent } from './basicform/basicform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponent } from './child/child.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
import { PipesPipe } from './pipes.pipe';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { LifeHookComponent } from './life-hook/life-hook.component';
import { ReactiveOrmComponent } from './forms/reactive-orm/reactive-orm.component';



@NgModule({
  declarations: [
    AppComponent,
    LoopsComponent,
    BasicformComponent,
    ToggleComponent,
    TodoListComponent,
    ChildComponent,
    UserdetailsComponent,
    ChildtoparentComponent,
    TemplatereferencevariableComponent,
    PipesPipe,
    HomeComponent,
    AboutComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent,
    LifeHookComponent,
    ReactiveOrmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
