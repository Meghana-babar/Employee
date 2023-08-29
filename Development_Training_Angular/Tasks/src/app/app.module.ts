import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetandvarComponent } from './letandvar/letandvar.component';
import { StringComponent } from './string/string.component';
import { ReversestringComponent } from './reversestring/reversestring.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GuardsGuard } from './guards.guard';
import {MatMenuModule} from '@angular/material/menu'; 
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FilterPipe } from './filter.pipe';
import { NgoninitComponent } from './lifecyclehooks/ngoninit/ngoninit.component';
import { DemoComponent } from './lifecyclehooks/demo/demo.component';
import { ChildComponent1 } from './childToparent/child/child.component';
import { Child1Component } from './childToparent1/child1/child1.component';
import { Parent2Component } from './childToparent1/parent2/parent2.component';
import { ParentComponent } from './parenttochildcomponent/parent/parent.component';
import { ChildComponent } from './parenttochildcomponent/child/child.component';
import { ProductsComponent } from './CRUD/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './CRUD/student/student.component';
import { BasicsComponent } from './basics/basics.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustompipesPipe } from './custompipes.pipe';
import { CustompipescompoComponent } from './custompipescompo/custompipescompo.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustomdcompComponent } from './custom/customdcomp/customdcomp.component';
import { Customdirective1Directive } from './custom/custom/customdirective1.directive';
import { Comp1Component } from './custom/viewencapsulation/comp1/comp1.component';
import { Comp2Component } from './custom/viewencapsulation/comp2/comp2.component';
import { ShodowComponent } from './custom/viewencapsulation/shodow/shodow.component';
import { EmulatedComponent } from './custom/viewencapsulation/emulated/emulated.component';
import { ContentprojchildComponent } from './custom/viewencapsulation/projection/contentprojchild/contentprojchild.component';
import { ContentprojparentComponent } from './custom/viewencapsulation/projection/contentprojparent/contentprojparent.component';
import { SingleslotComponent } from './contentprojection/singleslot/singleslot.component';
import { SingleslotchildComponent } from './contentprojection/singleslotchild/singleslotchild.component';
import { Task1Component } from './task1/task1.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { Reactiveform1Component } from './forms/reactiveform/reactiveform1/reactiveform1.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CompoComponent } from './rxjs/compo/compo.component';
import { DynamiccompoComponent } from './dynamiccompo/dynamiccompo.component';
import { Dynamiccompo1Component } from './dynamiccompo1/dynamiccompo1.component';


@NgModule({
  declarations: [
    AppComponent,
    LetandvarComponent,
    StringComponent,
    ReversestringComponent,
    HomeComponent,
    NgforComponent,
    LoginComponent,
    LoginformComponent,
    FilterPipe,
    NgoninitComponent,
    DemoComponent,
    ChildComponent1,
    Child1Component,
    Parent2Component,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    StudentComponent,
    BasicsComponent,
    PipeComponent,
    CustompipesPipe,
    CustompipescompoComponent,
    CustomdirectiveDirective,
    CustomdcompComponent,
    Customdirective1Directive,Comp1Component,Comp2Component, ShodowComponent, EmulatedComponent, ContentprojchildComponent, ContentprojparentComponent, SingleslotComponent, SingleslotchildComponent, Task1Component, ReactiveformComponent, Reactiveform1Component, RxjsComponent, CompoComponent, DynamiccompoComponent, Dynamiccompo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [GuardsGuard],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
  
}
