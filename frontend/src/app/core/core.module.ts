import { NgModule } from '@angular/core';

import { MessageService } from './message.service';
import { ModalService } from './modal/modal.service';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [MessageService, ModalService]
})
export class CoreModule {}
