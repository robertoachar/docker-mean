import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { IUser } from './user.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  create(user: IUser) {
    return this.http.post(`${environment.api}/api/users`, user);
  }

  list(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.api}/api/users`);
  }

  remove(id: string) {
    return this.http.delete(`${environment.api}/api/users/${id}`);
  }

  update(user: IUser) {
    return this.http.put(`${environment.api}/api/users/${user._id}`, user);
  }

  view(id: string) {
    return this.http.get<IUser>(`${environment.api}/api/users/${id}`);
  }
}
