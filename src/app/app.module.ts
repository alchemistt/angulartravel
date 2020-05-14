import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { from } from 'rxjs';
import { AuthService } from './auth.service';
import { NgxPaginationModule } from "ngx-pagination";
import { EditregisterComponent } from './editregister/editregister.component';
import { ReqComponent } from './req/req.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { EditticketComponent } from './editticket/editticket.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginadminComponent,
    DashboardComponent,
    DashboardadminComponent,
    EditregisterComponent,
    ReqComponent,
    NewComponent,
    ViewComponent,
    ForgetpassComponent,
    EditticketComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
