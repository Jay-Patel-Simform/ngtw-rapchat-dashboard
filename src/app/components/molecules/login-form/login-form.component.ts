import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-login-form',
  imports: [InputComponent, ButtonComponent],
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
