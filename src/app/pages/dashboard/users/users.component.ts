import { Component } from '@angular/core';

import { InputComponent } from '../../../components/atoms/input/input.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MusicFilterButtonsComponent } from '../../../components/molecules/music-filter-buttons/music-filter-buttons.component';
import { UsersTableComponent } from '../../../components/molecules/users-table/users-table.component';

@Component({
  selector: 'app-users',
  imports: [
    InputComponent,
    AngularSvgIconModule,
    MusicFilterButtonsComponent,
    UsersTableComponent,
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent {}
