import { Component } from '@angular/core';

import { CardComponent } from '../../atoms/card/card.component';

import { LogoWithTextComponent } from '../../molecules/logo-with-text/logo-with-text.component';
import { LoginFormHeaderComponent } from '../../molecules/login-form-header/login-form-header.component';
import { LoginFormComponent } from '../../molecules/login-form/login-form.component';

@Component({
  selector: 'app-login-card',
  imports: [
    CardComponent,
    LogoWithTextComponent,
    LoginFormHeaderComponent,
    LoginFormComponent,
  ],
  templateUrl: './login-card.component.html',
})
export class LoginCardComponent {}
