import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogStates = signal<Record<string, boolean>>({});

  open(dialogId: string) {
    this.dialogStates.update(val => ({ ...val, [dialogId]: true }));
  }

  close(dialogId: string) {
    this.dialogStates.update(val => ({ ...val, [dialogId]: false }));
  }

  toggle(dialogId: string) {
    this.dialogStates.update(val => ({ ...val, [dialogId]: !val?.[dialogId] }));
  }

  isDialogOpen(dialogId: string) {
    return !!this.dialogStates()?.[dialogId];
  }
}
