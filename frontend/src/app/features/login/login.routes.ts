import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Login | MoneyPilot',
    data: { heading: 'Login' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
