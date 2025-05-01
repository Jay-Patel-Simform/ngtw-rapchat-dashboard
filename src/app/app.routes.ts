import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { UsersComponent } from './pages/dashboard/users/users.component';

import { DashboardComponent } from './layouts/dashboard/dashboard.component';

export const routes: Routes = [
  // Default Route redirected to the login page
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  // login page
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];
