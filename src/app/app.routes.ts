import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pokemons/pages/home-page/home-page.component')
  },
  {
    path: 'error',
    loadComponent: () => import('./pokemons/pages/error-page/error-page.component')
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error' }
];
