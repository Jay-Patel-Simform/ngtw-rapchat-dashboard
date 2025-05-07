import { Routes } from '@angular/router';

import { AuthComponent as AuthLayout } from '../../layouts/auth/auth.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
