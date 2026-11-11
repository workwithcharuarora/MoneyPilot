import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeSelect } from '../shared/theme-select';
@Component({
  imports: [RouterLink, RouterOutlet, ThemeSelect],
  template: ` <header class="site-header wrap">
      <a class="brand" routerLink="/" aria-label="MoneyPilot home"
        ><span class="brand-icon" aria-hidden="true"
          ><svg class="inline-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 19 19 5M5 5h14v14"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            /></svg
        ></span>
        MoneyPilot<span class="brand-dot">.</span></a
      >
      <nav aria-label="Main navigation">
        <a href="/#features">Features</a><a href="/#how-it-works">How it works</a
        ><a href="/#privacy">Privacy</a>
      </nav>
      <div class="header-actions">
        <a routerLink="/login">Log in</a
        ><a class="button small" routerLink="/registration"
          >Get started
          <span aria-hidden="true"
            ><svg class="inline-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 19 19 5M5 5h14v14"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              /></svg></span
        ></a>
      </div>
    </header>
    <main id="main" tabindex="-1"><router-outlet /></main>
    <footer class="wrap site-footer">
      <div>
        <a class="brand" routerLink="/">MoneyPilot<span class="brand-dot">.</span></a>
        <p>Track Today. Plan Tomorrow.</p>
      </div>
      <a href="/#privacy">Privacy & your data</a><app-theme-select /><small
        >© 2026 MoneyPilot</small
      >
    </footer>`,
})
export class PublicLayout {}
