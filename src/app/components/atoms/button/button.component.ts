import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [CommonModule],
})
export class ButtonComponent {
  // button props
  variant = input<'primary' | 'secondary'>('primary');
  @Input() buttonType: HTMLButtonElement['type'] = 'button';

  get buttonClasses() {
    const baseClasses =
      'h-[48px] rounded-[8px] text-center text-sm font-semibold cursor-pointer text-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 w-full shadow-[0_4px_12px_0_#3751FF3D] tracking-[0.2px]';

    const variantClasses = {
      primary: 'bg-[rgba(55,81,255,1)]',
      secondary: 'bg-gray-500',
    }[this.variant()];

    return `${baseClasses} ${variantClasses}`;
  }
}
