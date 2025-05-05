import { Component, HostListener, inject } from '@angular/core';

import { LogoWithTextComponent } from '../logo-with-text/logo-with-text.component';
import { MenuLinkComponent } from '../menu-link/menu-link.component';

import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar',
  imports: [LogoWithTextComponent, MenuLinkComponent, AngularSvgIconModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);

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

  // close sidebar when clicking outside on mobile
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (window.innerWidth < 768) {
      const sidebarElement = document.querySelector('aside');
      const navbarMenuButton = document.querySelector('button[aria-expanded]');

      if (
        this.sidebarService.isSidebarOpen() &&
        sidebarElement &&
        navbarMenuButton &&
        !sidebarElement.contains(event.target as Node) &&
        !navbarMenuButton.contains(event.target as Node)
      ) {
        this.sidebarService.closeSidebar();
      }
    }
  }
}
