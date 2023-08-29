import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  studentComponent } from './Student-info/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from './mat-material';
import {  MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginGuardService } from './login-guard.service';
import { AuthService } from './auth.service';
import { MatTableDataSource } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    LoginComponent,
    StudentDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    ToastrModule.forRoot()
    
  ],
  providers: [LoginGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
