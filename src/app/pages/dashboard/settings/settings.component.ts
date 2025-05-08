import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

import { ButtonComponent } from '../../../components/atoms/button/button.component';
import { DialogComponent } from '../../../components/dialog/dialog.component';

import { DialogService } from '../../../services/dialog/dialog.service';
import { LoginFormComponent } from '../../../components/molecules/login-form/login-form.component';

@Component({
  selector: 'app-settings',
  imports: [ButtonComponent, DialogComponent, LoginFormComponent],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  dialogService = inject(DialogService);

  readonly DIALOG_LOGIN_ID = 'login-dialog';
  readonly DIALOG_2_ID = 'dialog-2-id';

  constructor(private readonly router: Router) {}

  handleClick() {
    this.router.navigate(['/auth/login']);
  }

  openDialog(dialogId: string) {
    this.dialogService.open(dialogId);
  }

  closeDialog(dialogId: string) {
    this.dialogService.close(dialogId);
  }
}
