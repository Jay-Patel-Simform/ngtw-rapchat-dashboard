import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSidebarOpen = signal(false);

  toggleSidebar() {
    this.isSidebarOpen.update(val => !val);
  }

  openSidebar() {
    this.isSidebarOpen.set(true);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}
