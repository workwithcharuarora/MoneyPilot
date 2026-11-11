import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Goals | MoneyPilot',
    data: { heading: 'Goals' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
