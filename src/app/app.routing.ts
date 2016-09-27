/**
 * Created by Anthony on 9/27/2016.
 */
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login-component/login.component';
import { OligosComponent } from './oligos/oligos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from "./_guards/auth.guard";


const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'oligos',
    component: OligosComponent,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
