import { Component, OnInit } from '@angular/core';

import { IUser } from '../user.interface';
import { UserService } from '../user.service';
import { ModalService } from '../../core/modal/modal.service';
import { MessageService } from '../../core/message.service';

@Component({
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {
  user: IUser = {} as any;
  users: IUser[] = [];
  private form: String = 'user-form';

  constructor(
    private message: MessageService,
    private modal: ModalService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.load();
  }

  add(): void {
    this.user = {} as any;
    this.modal.show(this.form);
  }

  cancel(): void {
    this.modal.hide(this.form);
  }

  edit(id: string): void {
    this.userService.view(id).subscribe((user: IUser) => {
      this.user = user;
      this.modal.show(this.form);
    });
  }

  load() {
    this.userService.list().subscribe((users) => (this.users = users));
  }

  remove(id: string) {
    this.userService.remove(id).subscribe(() => {
      this.load();
    });
  }

  save() {
    if (!this.user._id) {
      this.userService.create(this.user).subscribe((user) => {
        this.message.success('Created successfully');
        this.modal.hide(this.form);
        this.load();
      });
    } else {
      this.userService.update(this.user).subscribe((user) => {
        this.message.success('Updated successfully');
        this.modal.hide(this.form);
        this.load();
      });
    }
  }
}
