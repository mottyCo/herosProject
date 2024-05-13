import { Component } from '@angular/core';
import { HerosServiseService } from '../../../../core/services/heros-servise.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cards-collection',
  templateUrl: './cards-collection.component.html',
  styleUrl: './cards-collection.component.css'
})
export class CardsCollectionComponent {
  constructor(public service: UserService){}
  
}
