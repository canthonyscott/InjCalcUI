import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login.component';
import {LoginService} from "./login.service";
import { routing } from './app.routing';
import { OligosComponent } from './oligos/oligos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "./_guards/auth.guard";
import {OligosService} from "./oligos.service";
import { AddOligoComponent } from './add-oligo/add-oligo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OligosComponent,
    DashboardComponent, AddOligoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, OligosService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
