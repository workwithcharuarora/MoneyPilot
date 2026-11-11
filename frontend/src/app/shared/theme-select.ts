import { Component, inject } from '@angular/core';
import { ThemeService, Theme } from '../core/theme/theme.service';
@Component({
  selector: 'app-theme-select',
  template: `<label class="theme-picker"
    >Theme
    <select aria-label="Color theme" [value]="theme.preference()" (change)="change($event)">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select></label
  >`,
})
export class ThemeSelect {
  readonly theme = inject(ThemeService);
  change(event: Event): void {
    this.theme.set((event.target as HTMLSelectElement).value as Theme);
  }
}
