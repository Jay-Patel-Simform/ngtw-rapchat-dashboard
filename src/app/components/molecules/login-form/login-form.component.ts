import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InputWithLabelComponent } from '../input-with-label/input-with-label.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-login-form',
  imports: [InputWithLabelComponent, ButtonComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(private readonly router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted');
    this.router.navigate(['/dashboard/users']);
  }
}
