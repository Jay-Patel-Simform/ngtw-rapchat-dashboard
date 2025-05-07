import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { filter, Subscription } from 'rxjs';

import { ButtonComponent } from '../../atoms/button/button.component';

import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [AngularSvgIconModule, ButtonComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  sidebarService = inject(SidebarService);
  themeService = inject(ThemeService);

  currentRoute = '';

  private readonly routerSubscription: Subscription;

  constructor(private readonly router: Router) {
    // Subscribe to Angular Router's event stream
    this.routerSubscription = this.router.events
      // Filter the events to only listen for when navigation ends successfully
      .pipe(filter(event => event instanceof NavigationEnd))
      // Subscribe to those filtered events
      .subscribe(event => {
        // Ge the final URL  after any redirects
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  navbarHeaderConfig: Record<string, string> = {
    '/dashboard/users': 'Users',
    '/dashboard/settings': 'Settings',
  };

  toggleThemeMode() {
    this.themeService.theme.update(theme => {
      const mode = theme === 'dark' ? 'light' : 'dark';
      return mode;
    });
  }
}
