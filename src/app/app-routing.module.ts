import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import{ EditregisterComponent } from './editregister/editregister.component';
import { RegisterComponent } from './register/register.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  ReqComponent } from './req/req.component';
 import { NewComponent} from "./new/new.component";
 import { ViewComponent} from "./view/view.component"
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { EditticketComponent } from './editticket/editticket.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:'/login',
    pathMatch:'full'
  
  },
  
  {
  path:"login",
  component: LoginComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
    },
    {
      path:"editticket",
      component: EditticketComponent
      },
  {
    path:"loginadmin",
    component: LoginadminComponent
  
  },
  {
    path:"register",
    component: RegisterComponent
  
  },
  {
    path:"res",
    component: RegisterComponent
  
  },
  {
    path:"editregister",
    component: EditregisterComponent
  
  },
  {
    path:"forget",
    component: ForgetpassComponent
  
  },
  {
    path:"dashboardadmin",
    component: DashboardadminComponent
  
  },
  {
    path:"req",
    component: ReqComponent
  
  },
  {
    path:"new",
    component: NewComponent
  
  },
  {
    path:"view",
    component: ViewComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
