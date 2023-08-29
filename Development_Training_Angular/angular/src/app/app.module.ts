import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { PtcComponent } from './ptc/ptc.component';
import { CtpComponent } from './ctp/ctp.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { EmpFormComponent } from './crud/emp-form/emp-form.component';
import { EmpAddEditComponent } from './crud/emp-add-edit/emp-add-edit.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobileComponent } from './mobile/mobile.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgerComponent } from './burger/burger.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { GuardService } from './guard.service';
import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';
import { LetandvarComponent } from './letandvar/letandvar.component';
import { RouterModule } from '@angular/router';
import { NgforComponent } from './directive/ngfor/ngfor.component';
import { CpipePipe } from './custompipe/cpipe.pipe';
import { PipcompComponent } from './custompipe/pipcomp/pipcomp.component';
import { CandyComponent } from './guard/candy/candy.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { EjsdropdownComponent } from './ejsdropdown/ejsdropdown.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { LinechartComponent } from './linechart/linechart.component';
import { NgChartsModule } from 'ng2-charts';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AccumulationChartAllModule, PieSeries,ChartModule, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-angular-charts';
import { AccumulationLegendService, CategoryService, DataLabelService, LegendService, LineSeriesService, PieSeriesService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { UppercasePipe } from './custompipe/uppercase.pipe';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { SubformComponent } from './subform/subform.component';
import { NoneComponent } from './ViewEncapsulation/none/none.component';
import { ShadowComponent } from './ViewEncapsulation/shadow/shadow.component';
import { NgIfComponent } from './directive/ng-if/ng-if.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { PiechartComponent } from './piechart/piechart.component';
import { EmpAddComponent } from './cr/emp-add/emp-add.component';
import { EmpFComponent } from './cr/emp-f/emp-f.component';
import { OfComponent } from './Rxjs/of/of.component';
import { FromComponent } from './Rxjs/from/from.component';
import { FilterComponent } from './Rxjs/filter/filter.component';
import { NotiComponent } from './subject/noti/noti.component';
import { AuthService } from './auth.service';
import { UsersComponent } from './fakeapicrud/users/users.component';
import { InterceptorInterceptor } from './fakeapicrud/interceptor.interceptor';
import { FilterEjsComponent } from './filter-ejs/filter-ejs.component';
import { EjsdialogComponent } from './ejsdialog/ejsdialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PtcComponent,
    CtpComponent,
    DynamicComponent,
    EmpFormComponent,
    EmpAddEditComponent,
    ReactiveformComponent,
    MobileComponent,
    PizzaComponent,
    BurgerComponent,
    LaptopComponent,
    LoginComponent,
    ObservableComponent,
    InbuiltpipeComponent,
    LetandvarComponent,
    NgforComponent,
    CpipePipe,
    PipcompComponent,
    CandyComponent,
    EjsdropdownComponent,
    LinechartComponent,
    UppercasePipe,
    DialogboxComponent,
    SubformComponent,
    NoneComponent,
    ShadowComponent,
    NgIfComponent,
    UserComponent,
    RegisterComponent,
    AdmindashboardComponent,
    DashboardComponent,
    PiechartComponent,
    EmpAddComponent,
    EmpFComponent,
    OfComponent,
    FromComponent,
    FilterComponent,
    NotiComponent,
    UsersComponent,
    FilterEjsComponent,
    EjsdialogComponent,
    StringInterpolationComponent,
    EmployeeregistrationComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,DropDownListModule,
    MultiSelectAllModule,
    NgChartsModule,MultiSelectModule,
    MatCardModule,NgxOtpInputModule,
    AccumulationChartAllModule,
    ToastrModule.forRoot(
      {preventDuplicates:true
      }
    ),
    FontAwesomeModule
    
  ],
  providers: [AuthService,GuardService,SeriesCollectionDirective,
    LineSeriesService,DataLabelService,
    CategoryService,
    LegendService,
    TooltipService,
PieSeriesService,    AccumulationLegendService ,
{provide:HTTP_INTERCEPTORS,useClass:InterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
