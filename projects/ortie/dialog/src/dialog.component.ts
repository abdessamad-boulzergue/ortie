import {Component, ContentChild, EventEmitter, Input, Output} from '@angular/core';
import {DialogRef} from '@angular/cdk/dialog';

@Component({
    selector: 'ort-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css'],
  })
export class DialogComponent {
  constructor(public dialog: DialogRef) {}
 

  @Input('width') width?: number;
  @Input('type') severity: DialogType = 'info';

  @Output() closed: EventEmitter<void> = new EventEmitter();

  get _width(): string {
    if (this.width) {
      return `${this.width}px`;
    } else {
      return 'auto';
    }
  }

  _onClose(): void {
    this.dialog.close();
    this.closed.emit();
  }
}

export type DialogType = 'error' | 'success' | 'warning' | 'info';
