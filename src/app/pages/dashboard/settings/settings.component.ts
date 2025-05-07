import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { ButtonComponent } from '../../../components/atoms/button/button.component';

@Component({
  selector: 'app-settings',
  imports: [ButtonComponent],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  constructor(private readonly router: Router) {}

  handleClick() {
    this.router.navigate(['/auth/login']);
  }
}
