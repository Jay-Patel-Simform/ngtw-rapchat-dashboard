import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

import { ButtonComponent } from '../../../components/atoms/button/button.component';
import { DialogComponent } from '../../../components/dialog/dialog.component';

import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-settings',
  imports: [ButtonComponent, DialogComponent],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  dialogService = inject(DialogService);

  constructor(private readonly router: Router) {}

  handleClick() {
    this.router.navigate(['/auth/login']);
  }
}
