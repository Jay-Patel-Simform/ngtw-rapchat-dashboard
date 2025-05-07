import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(
        mod => mod.DashboardRoutes
      ),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
