import { Component } from '@angular/core';
import { UsersService } from '../../../../core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  userName = 'anonimus'
  x!: UsersService
  constructor(private users : UsersService, private router : Router){
    this.x = users
    if(users.localUser)
      this.userName = users.localUser.userName
  }
  onLoginClick(){
    this.router.navigate(['user/login'])
  }
  onLogoutClick(){
    this.users.localUser = null
    this.router.navigate(['heros-collection'])
  }
}
