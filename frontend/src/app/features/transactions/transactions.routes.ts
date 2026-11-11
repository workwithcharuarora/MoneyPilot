import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Transactions | MoneyPilot',
    data: { heading: 'Transactions' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
