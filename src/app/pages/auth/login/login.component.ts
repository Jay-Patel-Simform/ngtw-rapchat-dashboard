import { Component } from '@angular/core';

import { LoginComponent as LoginTemplate } from '../../../components/templates/login/login.component';
import { AuthComponent } from '../../../layouts/auth/auth.component';

@Component({
  selector: 'app-login',
  imports: [LoginTemplate, AuthComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
