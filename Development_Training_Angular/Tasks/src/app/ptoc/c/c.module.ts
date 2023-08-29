import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c.component';


@NgModule({
  declarations: [
    CComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[CComponent]
})
export class CModule { }
