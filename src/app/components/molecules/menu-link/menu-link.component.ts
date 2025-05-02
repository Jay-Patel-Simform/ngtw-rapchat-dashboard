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
  // Props
  @Input() href = '#';
  @Input() label = '';
  @Input() icon = '';
  // State variable to track if the link is active
  isActive = false;

  // Subscription to track router events
  private routeSubscription!: Subscription;

  // Inject the Angular Router Service
  constructor(private readonly router: Router) {}

  // Runs once after the component is initialized
  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isActive = this.router.url.startsWith(this.href); // Check if the current URL starts with the link's href
      }
    });

    // Initial check to set the active state
    this.isActive = this.router.url.startsWith(this.href);
  }

  // Runs once  before the component is destroyed
  ngOnDestroy() {
    if (this.routeSubscription) {
      // Unsubscribe from events to prevents memory leaks
      this.routeSubscription.unsubscribe();
    }
  }
}
