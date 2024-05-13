import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collection-bar-card',
  templateUrl: './collection-bar-card.component.html',
  styleUrl: './collection-bar-card.component.css'
})
export class CollectionBarCardComponent {

  @Input() heroname! : string
  @Input() heroImageUrl! : string
  @Input() heroQuote! : string

}
