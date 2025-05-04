import { Component } from '@angular/core';

import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-music-filter-buttons',
  imports: [ButtonComponent],
  templateUrl: './music-filter-buttons.component.html',
})
export class MusicFilterButtonsComponent {
  filterOptions = [
    { id: 1, name: 'Hot 100', isActive: true },
    { id: 2, name: 'Suggested', isActive: false },
    { id: 3, name: 'Verified', isActive: false },
    { id: 4, name: 'Subscribers', isActive: false },
    { id: 5, name: 'Producers', isActive: false },
  ];
}
