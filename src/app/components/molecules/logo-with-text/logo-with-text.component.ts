import { Component, Input } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-logo-with-text',
  imports: [AngularSvgIconModule],
  templateUrl: './logo-with-text.component.html',
})
export class LogoWithTextComponent {
  @Input() svgIconColorClass: string = '';
}
