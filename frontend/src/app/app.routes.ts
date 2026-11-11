import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/public-layout').then((m) => m.PublicLayout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'MoneyPilot — Track Today. Plan Tomorrow.',
        loadComponent: () => import('./features/landing/landing').then((m) => m.Landing),
      },
      {
        path: 'login',
        loadChildren: () => import('./features/login/login.routes').then((m) => m.routes),
      },
      {
        path: 'registration',
        loadChildren: () =>
          import('./features/registration/registration.routes').then((m) => m.routes),
      },
      {
        path: 'onboarding',
        loadChildren: () => import('./features/onboarding/onboarding.routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/authenticated-layout').then((m) => m.AuthenticatedLayout),
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then((m) => m.routes),
      },
      {
        path: 'accounts',
        loadChildren: () => import('./features/accounts/accounts.routes').then((m) => m.routes),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./features/transactions/transactions.routes').then((m) => m.routes),
      },
      {
        path: 'budgets',
        loadChildren: () => import('./features/budgets/budgets.routes').then((m) => m.routes),
      },
      {
        path: 'bills',
        loadChildren: () => import('./features/bills/bills.routes').then((m) => m.routes),
      },
      {
        path: 'goals',
        loadChildren: () => import('./features/goals/goals.routes').then((m) => m.routes),
      },
      {
        path: 'reports',
        loadChildren: () => import('./features/reports/reports.routes').then((m) => m.routes),
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/settings/settings.routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '**',
    title: 'Page not found | MoneyPilot',
    data: { heading: 'Page not found' },
    loadComponent: () => import('./shared/placeholder-page').then((m) => m.PlaceholderPage),
  },
];
