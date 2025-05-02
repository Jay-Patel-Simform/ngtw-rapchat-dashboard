import { Component, Input } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  // input props
  @Input() inputType: HTMLInputElement['type'] = 'text';
  @Input() inputPlaceholder: string = 'Enter any value';
  @Input() isPassword: boolean = false;

  // state
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getInputType() {
    return this.isPassword && this.showPassword ? 'text' : this.inputType;
  }
}
