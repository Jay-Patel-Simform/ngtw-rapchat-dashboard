import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [CommonModule],
})
export class ButtonComponent {
  // button props
  @Input() variant: 'default' | 'outlined' = 'default';
  @Input() buttonType: HTMLButtonElement['type'] = 'button';
  @Input() buttonSize: 'default' | 'sm' | 'lg' | 'icon' | 'xxl' = 'default';
  @Input() disabled: boolean = false;
  @Input() class: string = '';

  get buttonClasses() {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      default:
        'bg-primary text-primary-foreground shadow  hover:bg-primary/90 focus:ring-primary',

      outlined:
        'border border-border-light  bg-background  hover:bg-secondary/80',
    }[this.variant];

    const sizesClasses = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 px-2',
      xxl: 'h-12 px-10',
    }[this.buttonSize];

    return `${baseClasses} ${variantClasses} ${sizesClasses}`;
  }
}
