import { Injectable } from '@angular/core';
import { HerosServiseService } from '../../../core/services/heros-servise.service';
import { UsersService } from '../../../core/services/users.service';
import { Hero } from '../../../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private heros: HerosServiseService, private users : UsersService,) { 
    this.localUser_globalHerosCollection = this.heros.getHeros()
    // this.userHerosCollection = this.globalHerosCollection
    if(this.users.localUser?.heros != undefined)
      this.localUser_userHerosCollection = this.users.localUser?.heros 
  }
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

  //localUser:
  localUser_isModalDisplay = false
  localUser_userName = this.users.localUser?.userName
  localUser_globalHerosCollection!: Hero[]
  localUser_userHerosCollection!: Hero[] 
  localUser_primaryHero: Hero | null = null
  localUser_correctHeroName: string = ''
  localUser_correctHeroquote: string = ''
  localUser_correctHeroimage: string = ''
  localUser_correcrHeroStars: number = 0

  

  isUserOwnThisCard(hero: Hero):boolean{
    for(let userHero of this.localUser_userHerosCollection)
      if(userHero.name === hero.name)
        return true
    return false
  }

  addHeroIntoUserCollection(heroName:string):null{
    for(let hero of this.localUser_globalHerosCollection){
      if(hero.name === heroName){
        this.localUser_userHerosCollection.push(new Hero(hero.name, hero.quote, hero.image))
        return null
      }
    }
    return null
  }
  removeHeroFromUserCollection(hero: Hero):null{
    let index = -1
    for (let i = 0; i < this.localUser_userHerosCollection.length; i++) {
      if(hero.name === this.localUser_userHerosCollection[i].name){
        index = i 
        break
      }   
    }

    
    if(index > -1){
      this.localUser_userHerosCollection.splice(index, 1)
      if(hero.name === this.localUser_correctHeroName){
        this.localUser_correctHeroName = '';
        this.localUser_correctHeroimage = '';
        this.localUser_correctHeroquote = ''
        this.localUser_primaryHero = null
      }
    }
    return null
  }
  makePrimaryCard(hero : Hero){
    this.localUser_correctHeroName = hero.name
    this.localUser_correctHeroimage = hero.image;
    this.localUser_correctHeroquote = hero.quote;
    this.localUser_primaryHero = hero
    this.localUser_correcrHeroStars = this.localUser_primaryHero.stars
  }
  trainHero(){
   if(this.localUser_primaryHero != null && this.localUser_primaryHero.stars < 5 ){
    if(this.users.localUser != undefined && this.users.localUser?.trainsToday < 5){
      this.localUser_primaryHero.stars++
      this.localUser_correcrHeroStars = this.localUser_primaryHero.stars
      this.users.localUser.trainsToday++
    }else if(this.users.localUser != undefined && this.users.localUser?.trainsToday === 5){

      this.localUser_isModalDisplay = true
     }
   }
  }
  isHeroMaxStars(){
    if(this.localUser_primaryHero != null && this.localUser_primaryHero.stars >= 5)
      return true
    return false
  }
}
