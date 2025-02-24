import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home-page/home-page.component') },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component'),
    children: [
      { path: 'search', loadComponent: () => import('./features/pokemon/components/search-by/search-by.component') },
    ]
  },
  { path: 'error', loadComponent: () => import('./pages/error-page/error-page.component') },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
];
