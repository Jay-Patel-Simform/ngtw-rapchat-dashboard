import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  // Default Route redirected to the login page
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  // auth routes
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then(routes => routes.AuthRoutes),
  },
  //
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(
        routes => routes.DashboardRoutes
      ),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
