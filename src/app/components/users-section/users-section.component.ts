import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-section',
  templateUrl: './users-section.component.html',
  styleUrl: './users-section.component.css'
})
export class UsersSectionComponent implements OnInit{
  usersArray!: User[]
  correntUser: User | null = null
  constructor(private users : UsersService){
    this.usersArray = this.users.users
  }
  displayUserCard(user : User){
    this.correntUser = user 
  }
  ngOnInit(){
 
  }
}
