import { Injectable, signal } from '@angular/core';
export type Theme = 'light' | 'dark' | 'system';
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly preference = signal<Theme>('system');
  private readonly media = window.matchMedia('(prefers-color-scheme: dark)');
  constructor() {
    try {
      const saved = localStorage.getItem('moneypilot-theme');
      if (saved === 'light' || saved === 'dark' || saved === 'system') this.preference.set(saved);
    } catch {
      /* Storage is optional. */
    }
    this.apply();
    this.media.addEventListener('change', () => this.apply());
  }
  set(value: Theme): void {
    if (!['light', 'dark', 'system'].includes(value)) return;
    this.preference.set(value);
    try {
      localStorage.setItem('moneypilot-theme', value);
    } catch {
      /* Storage is optional. */
    }
    this.apply();
  }
  private apply(): void {
    document.documentElement.dataset['theme'] =
      this.preference() === 'system' ? (this.media.matches ? 'dark' : 'light') : this.preference();
  }
}
