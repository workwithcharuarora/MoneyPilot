import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';

describe('Foundation routes', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: () => ({ matches: false, addEventListener: () => {} }),
    });
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
  });
  it('renders the landing page and all required sections', async () => {
    const harness = await RouterTestingHarness.create('/');
    const page = harness.routeNativeElement!;
    expect(page.textContent).toContain('Make sense of today.');
    for (const id of ['features', 'how-it-works', 'privacy', 'faqs', 'dashboard-preview'])
      expect(page.querySelector('#' + id)).toBeTruthy();
    expect(page.textContent).toContain('fictional');
  });
  for (const name of [
    'Login',
    'Registration',
    'Onboarding',
    'Dashboard',
    'Accounts',
    'Transactions',
    'Budgets',
    'Bills',
    'Goals',
    'Reports',
    'Settings',
  ]) {
    it(`loads ${name} without authentication or backend configuration`, async () => {
      const harness = await RouterTestingHarness.create('/' + name.toLowerCase());
      expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe(name);
      expect(harness.routeNativeElement?.textContent).toContain(
        'No authentication or financial data processing',
      );
    });
  }
  it('handles unknown routes', async () => {
    const harness = await RouterTestingHarness.create('/missing');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Page not found');
  });
});
