import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-dialog',
  imports: [AngularSvgIconModule],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Input() isOpen = false;
  @ViewChild('dialogElement') dialogElement!: ElementRef<HTMLElement>;

  @Input() titleID: string = '';
  @Input() descriptionID: string = '';

  @Input() closeServiceDialog!: (dialogId: string) => void;

  private previouslyFocusedElement: HTMLElement | null = null;
  private focusTrapped = false;

  open() {
    this.isOpen = true;
    this.previouslyFocusedElement = document.activeElement as HTMLElement;

    // prevent scrolling of background content
    document.body.style.overflow = 'hidden';
    // reset for ngAfterViewChecked
    this.focusTrapped = false;
  }

  close() {
    this.isOpen = false;

    // Re-enable scrolling
    document.body.style.overflow = '';

    this.restoreFocus();

    this?.closeServiceDialog(this.titleID);
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isOpen) {
      this.close();
      event.preventDefault();
    }
  }

  closeOnBackdrop(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  private restoreFocus() {
    if (this.previouslyFocusedElement?.focus) {
      setTimeout(() => {
        this.previouslyFocusedElement?.focus();
      });
    }
  }

  private trapFocus() {
    if (!this.dialogElement) return;

    const dialog = this.dialogElement.nativeElement;

    const focusableElements = dialog.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      (focusableElements?.[0] as HTMLElement)?.focus();
    } else {
      dialog?.focus();
    }

    dialog.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (focusableElements.length === 0) return;

      const firstFocusableElement = focusableElements?.[0] as HTMLElement;
      const lastFocusableElement = focusableElements?.[
        focusableElements.length - 1
      ] as HTMLElement;

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        event.preventDefault();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastFocusableElement
      ) {
        firstFocusableElement.focus();
        event.preventDefault();
      }
    });
  }

  ngAfterViewChecked() {
    if (this.isOpen && !this.focusTrapped) {
      this.trapFocus();
      this.focusTrapped = true;
    }
  }

  ngOnInit() {
    if (this.isOpen) {
      this.open();
    }
  }

  ngOnDestroy() {
    this.restoreFocus();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      if (this.isOpen) {
        this.open();
      } else {
        this.close();
      }
    }
  }
}
