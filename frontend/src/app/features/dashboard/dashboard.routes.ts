import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard | MoneyPilot',
    data: { heading: 'Dashboard' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
