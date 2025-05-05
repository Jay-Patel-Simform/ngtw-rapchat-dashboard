import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from '../../components/molecules/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/molecules/navbar/navbar.component';

import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  sidebarService = inject(SidebarService);
}
