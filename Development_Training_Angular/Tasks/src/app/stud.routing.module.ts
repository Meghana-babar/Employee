import { Route, Router, RouterModule, Routes } from "@angular/router";
import { StudeComponent } from "./stude.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {
        path:'',component:StudeComponent
    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class StudroutingModule{}