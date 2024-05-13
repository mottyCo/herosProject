import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-local-user-section',
  templateUrl: './local-user-section.component.html',
  styleUrl: './local-user-section.component.css'
})
export class LocalUserSectionComponent {
  constructor(public service : UserService,){}

}
