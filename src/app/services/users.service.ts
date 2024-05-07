import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private user1 : User = new User('usera', 'a@a', 'aaaaaaa1')
  private user2 : User = new User('userb', 'b@b', 'bbbbbbb1')
  private user3 : User = new User('userc', 'c@c', 'ccccccc1')
  private user4 : User = new User('userd', 'd@d', 'eeeeeee1')
  private user5 : User = new User('usere', 'e@e', 'fffffff1')
  localUser : User | null = new User('usera', 'a@a', 'aaaaaaa1')
  users: User[] = [
    this.user1,
    this.user2,
    this.user3,
    this.user4,
    this.user5,
  ]
  static localUser: any;
  constructor() { }
}
