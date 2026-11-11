import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Accounts | MoneyPilot',
    data: { heading: 'Accounts' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
