import { Component, OnInit } from '@angular/core';

import { UserService } from './users/user.service';
import { IUser } from './users/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.list()
      .subscribe((users) => this.users = users);
  }

  add() {

  }
}
