import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html'
})
export class ModalComponent {
  @Input() unique: string = undefined;
  @Input() title: string = undefined;

  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  cancel(): void {
    this.onCancel.emit();
  }

  save(): void {
    this.onSave.emit();
  }
}
