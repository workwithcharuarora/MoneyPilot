import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Bills | MoneyPilot',
    data: { heading: 'Bills' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
