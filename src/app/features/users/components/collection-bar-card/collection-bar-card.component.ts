import { Component, Input } from '@angular/core';
import { HerosServiseService } from '../../../../core/services/heros-servise.service';

@Component({
  selector: 'app-collection-bar-card',
  templateUrl: './collection-bar-card.component.html',
  styleUrl: './collection-bar-card.component.css'
})
export class CollectionBarCardComponent {

  constructor( private heros : HerosServiseService){}
  @Input() heroname! : string
  @Input() heroImageUrl! : string
  @Input() heroQuote! : string

  herosArray = this.heros.getHeros()
  herosArrayLength = this.herosArray.length
  previousHero = 13
  correntHero = 0
  nextHero = 1
  correntheroname = this.herosArray[this.correntHero].name
  correntheroImageUrl = '../../assets/images/' + this.herosArray[this.correntHero].image
  correntheroQuote = this.herosArray[this.correntHero].quote

  previousheroname = this.herosArray[this.previousHero].name
  previousheroImageUrl = '../../assets/images/' + this.herosArray[this.previousHero].image
  previousheroQuote = this.herosArray[this.previousHero].quote

  nextheroname = this.herosArray[this.nextHero].name
  nextheroImageUrl = '../../assets/images/' + this.herosArray[this.nextHero].image
  nextheroQuote = this.herosArray[this.nextHero].quote

  showNextHero(){ 
    if(this.nextHero === this.herosArrayLength-1){
      this.nextHero = 0
      this.correntHero++
      this.previousHero++
    }else if(this.correntHero === this.herosArrayLength-1){
      this.nextHero++
      this.correntHero = 0
      this.previousHero++
    }else if(this.previousHero === this.herosArrayLength-1){
      this.nextHero++
      this.correntHero++
      this.previousHero = 0
    }else{
      this.nextHero++
      this.correntHero++
      this.previousHero++
    }
    this.updateCards()
  }
  showPreviousHero(){ 
    if(this.nextHero === 0){
      this.nextHero = this.herosArrayLength-1
      this.correntHero--
      this.previousHero--
    }else if(this.correntHero === 0){
      this.nextHero--
      this.correntHero = this.herosArrayLength-1
      this.previousHero--
    }else if(this.previousHero === 0){
      this.nextHero--
      this.correntHero--
      this.previousHero = this.herosArrayLength-1
    }else{
      this.nextHero--
      this.correntHero--
      this.previousHero--
    }
    this.updateCards()
  }
  updateCards(){
    this.correntheroname = this.herosArray[this.correntHero].name
    this.correntheroImageUrl = '../../assets/images/' + this.herosArray[this.correntHero].image
    this.correntheroQuote = this.herosArray[this.correntHero].quote
    this.previousheroname = this.herosArray[this.previousHero].name
    this.previousheroImageUrl = '../../assets/images/' + this.herosArray[this.previousHero].image
    this.previousheroQuote = this.herosArray[this.previousHero].quote
    this.nextheroname = this.herosArray[this.nextHero].name
    this.nextheroImageUrl = '../../assets/images/' + this.herosArray[this.nextHero].image
    this.nextheroQuote = this.herosArray[this.nextHero].quote
  }
}
