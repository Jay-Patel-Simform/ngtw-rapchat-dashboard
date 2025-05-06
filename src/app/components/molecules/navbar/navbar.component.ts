import { Component, inject } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

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

  toggleThemeMode() {
    this.themeService.theme.update(theme => {
      const mode = theme === 'dark' ? 'light' : 'dark';
      return mode;
    });
  }
}
