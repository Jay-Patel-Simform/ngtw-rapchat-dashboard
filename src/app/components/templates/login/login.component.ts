import { Component } from '@angular/core';

import { LoginCardComponent } from '../../organisms/login-card/login-card.component';

@Component({
  selector: 'app-login-template',
  imports: [LoginCardComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
