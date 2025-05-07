import { Component } from '@angular/core';

import { LoginComponent as LoginTemplate } from '../../../components/templates/login/login.component';

@Component({
  selector: 'app-login',
  imports: [LoginTemplate],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
