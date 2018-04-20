import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class ModalService {
  hide(id: String): void {
    this.modal(id, 'hide');
  }

  show(id: String): void {
    this.modal(id, 'show');
  }

  private modal(id: String, action: String): void {
    const component: String = `#${id}`;

    $(component).modal(action);

    $(component).on('shown.bs.modal', () => {
      $(component)
        .find('[autofocus]')
        .focus();
    });
  }
}
