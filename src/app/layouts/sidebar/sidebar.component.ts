import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LogoWithTextComponent } from '../../components/molecules/logo-with-text/logo-with-text.component';
import { MenuLinkComponent } from '../../components/molecules/menu-link/menu-link.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    LogoWithTextComponent,
    AngularSvgIconModule,
    MenuLinkComponent,
    RouterLink,
    RouterLinkActive,
  ],
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
