import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeSelect } from '../shared/theme-select';
@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ThemeSelect],
  template: `<div class="app-shell">
    <aside>
      <a class="brand" routerLink="/">MoneyPilot.</a>
      <p class="eyebrow">WORKSPACE PREVIEW</p>
      <nav aria-label="Workspace navigation">
        @for (item of pages; track item) {
          <a [routerLink]="'/' + item.toLowerCase()" routerLinkActive="active">{{ item }}</a>
        }
      </nav>
      <app-theme-select />
    </aside>
    <main id="main" tabindex="-1">
      <div class="notice">
        Foundation preview · Authentication and financial features are not enabled.
      </div>
      <router-outlet />
    </main>
  </div>`,
})
export class AuthenticatedLayout {
  readonly pages = [
    'Dashboard',
    'Accounts',
    'Transactions',
    'Budgets',
    'Bills',
    'Goals',
    'Reports',
    'Settings',
  ];
}
