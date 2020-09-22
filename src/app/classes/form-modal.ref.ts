import { OverlayRef } from '@angular/cdk/overlay';

export class FormModalOverlayRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}