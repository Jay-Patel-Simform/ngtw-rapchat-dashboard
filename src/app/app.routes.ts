import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';

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
];
