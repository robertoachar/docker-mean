import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { UserService } from './user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, CoreModule],
  exports: [UserFormComponent, UserListComponent],
  declarations: [UserFormComponent, UserListComponent],
  providers: [UserService]
})
export class UserModule {}
