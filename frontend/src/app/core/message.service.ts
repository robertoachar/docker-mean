import { Injectable } from '@angular/core';

declare var toastr: any;

@Injectable()
export class MessageService {
  options: any = {
    closeButton: true,
    positionClass: 'toast-bottom-center',
    progressBar: true,
    timeOut: '3000'
  };

  error(message: string): void {
    toastr.error(message, 'Error', this.options);
  }

  info(message: string): void {
    toastr.info(message, 'Information', this.options);
  }

  success(message: string): void {
    toastr.success(message, 'Success', this.options);
  }

  warning(message: string): void {
    toastr.warning(message, 'Warning', this.options);
  }
}
