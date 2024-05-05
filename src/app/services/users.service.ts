import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  localUser = {
    name: 'local user',
    id: '01',
    password: 'pass1234',
    email: 'test@test.com'
  }
  constructor() { }
}
