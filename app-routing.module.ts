import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminviewComponent } from './adminview/adminview.component';
import { EmployeeviewComponent } from './employeeview/employeeview.component';

const routes: Routes = [{ path: 'admin', component: AdminviewComponent },
  { path: 'employee', component: EmployeeviewComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
