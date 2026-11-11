import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Budgets | MoneyPilot',
    data: { heading: 'Budgets' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
