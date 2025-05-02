import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [CommonModule],
})
export class ButtonComponent {
  // button props
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() buttonType: HTMLButtonElement['type'] = 'button';

  get buttonClasses() {
    const baseClasses =
      'h-12 rounded-lg text-center text-sm font-semibold cursor-pointer text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 w-full shadow-primary tracking-[0.2px]';

    const variantClasses = {
      primary: 'bg-primary hover:bg-primary/80 focus:ring-primary',
      secondary: 'bg-gray-500',
    }[this.variant];

    return `${baseClasses} ${variantClasses}`;
  }
}
