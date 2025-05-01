import { Component, Input } from '@angular/core';

import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'app-input-with-label',
  imports: [InputComponent],
  templateUrl: './input-with-label.component.html',
})
export class InputWithLabelComponent {
  @Input() label: string = 'Label';
  @Input() inputType: HTMLInputElement['type'] = 'text';
  @Input() inputPlaceholder: string = 'Placeholder';
  @Input() isPassword: boolean = false;
  @Input() htmlFor: string = 'input-id';
  @Input() inputId: string = 'input-id';
}
