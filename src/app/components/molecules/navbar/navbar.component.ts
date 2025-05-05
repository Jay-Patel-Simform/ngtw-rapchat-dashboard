import { Component, inject } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [AngularSvgIconModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  sidebarService = inject(SidebarService);
}
