import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DepartmentsComponent} from './departments/departments.component';
import {DepartmentdetailComponent} from './departmentdetail/departmentdetail.component';
import {ManagerdetailComponent} from './managerdetail/managerdetail.component';
import {CoordimemoriesComponent} from './coordimemories/coordimemories.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'departments',component:DepartmentsComponent},
{path:'departmentdetail',component:DepartmentdetailComponent},
{path:'managerdetail',component:ManagerdetailComponent},
{path:'memories',component:CoordimemoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
