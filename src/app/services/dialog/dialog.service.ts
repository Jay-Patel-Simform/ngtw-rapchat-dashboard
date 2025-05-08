import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  signal,
} from '@angular/core';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogStates = signal<Record<string, boolean>>({});

  private dialogRef?: ComponentRef<DialogComponent>;

  constructor(
    private readonly appRef: ApplicationRef,
    private readonly envInjector: EnvironmentInjector
  ) {}

  open(dialogId: string) {
    if (this.dialogRef) return;

    // Create the component with Environment
    this.dialogRef = createComponent(DialogComponent, {
      environmentInjector: this.envInjector,
    });

    // Attach to the application view tree
    this.appRef.attachView(this.dialogRef.hostView);

    // Append DOM Element to the body
    const domElement = this.dialogRef.location.nativeElement;
    document.body.appendChild(domElement);

    this.dialogStates.update(val => ({ ...val, [dialogId]: true }));
  }

  close(dialogId: string) {
    if (this.dialogRef) {
      this.appRef.detachView(this.dialogRef.hostView);
      this.dialogRef?.destroy();
      this.dialogRef = undefined;
    }

    this.dialogStates.update(val => ({ ...val, [dialogId]: false }));
  }

  toggle(dialogId: string) {
    this.dialogStates.update(val => ({ ...val, [dialogId]: !val?.[dialogId] }));
  }

  isDialogOpen(dialogId: string) {
    return !!this.dialogStates()?.[dialogId];
  }
}
