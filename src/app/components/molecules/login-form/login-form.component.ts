import { Component } from '@angular/core';

import { InputWithLabelComponent } from '../input-with-label/input-with-label.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-login-form',
  imports: [InputWithLabelComponent, ButtonComponent],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  onSubmit(event: Event) {
    event.preventDefault();
  }
}
