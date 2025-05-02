import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  NavigationEnd,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { Subscription } from 'rxjs';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-menu-link',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive, AngularSvgIconModule], // Import CommonModule
  templateUrl: './menu-link.component.html',
  styles: `
    .active {
      color: white;
      background-color: #1e293b; /* Darker background for active state */
    }
  `,
})
export class MenuLinkComponent {
  isActive = false;
  @Input() href = '#';
  @Input() label = '';
  @Input() icon = '';

  private routeSubscription!: Subscription;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isActive = this.router.url.startsWith(this.href); // Check if the current URL starts with the link's href
      }
    });

    this.isActive = this.router.url.startsWith(this.href);
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
