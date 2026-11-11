import { ThemeService } from './theme.service';
describe('ThemeService', () => {
  let dark = false;
  let changed: (() => void) | undefined;
  beforeEach(() => {
    localStorage.clear();
    dark = false;
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: () => ({
        get matches() {
          return dark;
        },
        addEventListener: (_: string, fn: () => void) => {
          changed = fn;
        },
      }),
    });
  });
  it('defaults to system and reacts to system changes', () => {
    const service = new ThemeService();
    expect(service.preference()).toBe('system');
    expect(document.documentElement.dataset['theme']).toBe('light');
    dark = true;
    changed!();
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
  it('persists explicit choices and ignores OS changes until system is selected', () => {
    const service = new ThemeService();
    service.set('light');
    dark = true;
    changed!();
    expect(document.documentElement.dataset['theme']).toBe('light');
    service.set('dark');
    expect(localStorage.getItem('moneypilot-theme')).toBe('dark');
    service.set('system');
    expect(document.documentElement.dataset['theme']).toBe('dark');
  });
  it('restores a saved choice', () => {
    localStorage.setItem('moneypilot-theme', 'dark');
    expect(new ThemeService().preference()).toBe('dark');
  });
  it('ignores invalid stored preferences', () => {
    localStorage.setItem('moneypilot-theme', 'unknown');
    expect(new ThemeService().preference()).toBe('system');
  });
});
