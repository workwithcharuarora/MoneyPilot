import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Reports | MoneyPilot',
    data: { heading: 'Reports' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
