import { Component } from '@angular/core';

import { LogoWithTextComponent } from '../logo-with-text/logo-with-text.component';
import { MenuLinkComponent } from '../menu-link/menu-link.component';

@Component({
  selector: 'app-sidebar',
  imports: [LogoWithTextComponent, MenuLinkComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  links = [
    {
      label: 'Overview',
      icon: 'assets/icons/overview.svg',
      route: '/dashboard/overview',
    },
    {
      label: 'A & R Charts',
      icon: 'assets/icons/calendar.svg',
      route: '/dashboard/ar-charts',
    },
    {
      label: 'Challenges',
      icon: 'assets/icons/eye-close.svg',
      route: '/dashboard/challenges',
    },
    {
      label: 'Songs',
      icon: 'assets/icons/calendar.svg',
      route: '/dashboard/songs',
    },
    {
      label: 'Users',
      icon: 'assets/icons/overview.svg',
      route: '/dashboard/users',
    },
  ];
}
