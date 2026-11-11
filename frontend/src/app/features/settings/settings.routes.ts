import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Settings | MoneyPilot',
    data: { heading: 'Settings' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
