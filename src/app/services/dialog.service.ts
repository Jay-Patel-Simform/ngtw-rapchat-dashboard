import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  isDialogOpen = signal(false);

  open() {
    this.isDialogOpen.set(true);
  }

  close() {
    this.isDialogOpen.set(false);
  }

  toggle() {
    this.isDialogOpen.update(val => !val);
  }
}
