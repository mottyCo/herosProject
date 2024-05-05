import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.css'
})
export class HeroCardComponent {

  @Input() heroname! : string
  @Input() heroImageUrl! : string
  @Input() heroQuote! : string

}
