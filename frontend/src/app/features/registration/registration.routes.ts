import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Registration | MoneyPilot',
    data: { heading: 'Registration' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
