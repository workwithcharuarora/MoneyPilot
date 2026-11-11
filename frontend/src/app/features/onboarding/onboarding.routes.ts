import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Onboarding | MoneyPilot',
    data: { heading: 'Onboarding' },
    loadComponent: () => import('../../shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
