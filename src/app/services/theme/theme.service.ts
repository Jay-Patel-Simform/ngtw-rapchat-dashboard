import { effect, Injectable, signal } from '@angular/core';

type ThemeModes = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<ThemeModes>('light');

  loadTheme() {
    const theme = window.localStorage.getItem('theme');

    if (theme) {
      this.theme.set(theme as ThemeModes);
    }
  }

  setLocalStorage() {
    window.localStorage.setItem('theme', this.theme());
  }

  setThemeClass() {
    const html = document.querySelector('html');
    html!.className = this.theme();
  }

  constructor() {
    this.loadTheme();

    effect(() => {
      this.setLocalStorage();
      this.setThemeClass();
    });
  }

  isDark() {
    return this.theme() === 'dark';
  }
}
