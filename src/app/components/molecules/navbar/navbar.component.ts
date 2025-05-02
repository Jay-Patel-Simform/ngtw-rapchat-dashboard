import { Component, EventEmitter, Output } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-navbar',
  imports: [AngularSvgIconModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  emitToggleSidebar() {
    console.log('Click on button');
    this.toggleSidebar.emit();
  }
}
