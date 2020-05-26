import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DepartmentsComponent} from './departments/departments.component';
import {DepartmentdetailComponent} from './departmentdetail/departmentdetail.component';
import {ManagerdetailComponent} from './managerdetail/managerdetail.component';
import {CoordimemoriesComponent} from './coordimemories/coordimemories.component';
import {ResultsComponent} from './results/results.component';


const routes: Routes = [
{path:'',component:HomeComponent,data:{animation:'home'}},
{path:'departments',component:DepartmentsComponent,data:{animation:'department'}},
{path:'departmentdetail',component:DepartmentdetailComponent,data:{animation:'departmentdetail'}},
{path:'departmentdetail/:dep',component:DepartmentdetailComponent,data:{animation:'departmentdetail'}},
{path:'managerdetail/:dep',component:ManagerdetailComponent,data:{animation:'managerdetail'}},
{path:'memories',component:CoordimemoriesComponent,data:{animation:'memories'}},
{path:'results',component:ResultsComponent,data:{animation:'results'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
