import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  }
];
