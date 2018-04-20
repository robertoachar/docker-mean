import { Component, Input } from '@angular/core';

import { IUser } from '../user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent {
  @Input() user: IUser = {} as any;
}
