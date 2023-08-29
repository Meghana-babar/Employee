import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PComponent } from './p.component';
import { CModule } from "../c/c.module";
import { C2Module } from "../c2/c2.module";


@NgModule({
    declarations: [
        PComponent
    ],
    imports: [
        CommonModule,
        CModule,
        C2Module
    ]
})
export class PModule { }
