import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HerosServiseService } from '../../services/heros-servise.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-local-user-section',
  templateUrl: './local-user-section.component.html',
  styleUrl: './local-user-section.component.css'
})
export class LocalUserSectionComponent {
  isModalDisplay = false
  userName = this.users.localUser?.userName
  globalHerosCollection!: Hero[]
  userHerosCollection!: Hero[] 
  primaryHero: Hero | null = null
  correctHeroName: string = ''
  correctHeroquote: string = ''
  correctHeroimage: string = ''
  correcrHeroStars: number = 0
  constructor(private users : UsersService, private globalHeros : HerosServiseService){
    this.globalHerosCollection = this.globalHeros.getHeros()
    // this.userHerosCollection = this.globalHerosCollection
    if(this.users.localUser?.heros != undefined)
      this.userHerosCollection = this.users.localUser?.heros 
   }
  isUserOwnThisCard(hero: Hero):boolean{
    for(let userHero of this.userHerosCollection)
      if(userHero.name === hero.name)
        return true
    return false
  }

  addHeroIntoUserCollection(heroName:string):null{
    for(let hero of this.globalHerosCollection){
      if(hero.name === heroName){
        this.userHerosCollection.push(new Hero(hero.name, hero.quote, hero.image))
        return null
      }
    }
    return null
  }
  removeHeroFromUserCollection(hero: Hero):null{
    let index = -1
    for (let i = 0; i < this.userHerosCollection.length; i++) {
      if(hero.name === this.userHerosCollection[i].name){
        index = i 
        break
      }   
    }

    
    if(index > -1){
      this.userHerosCollection.splice(index, 1)
      if(hero.name === this.correctHeroName){
        this.correctHeroName = '';
        this.correctHeroimage = '';
        this.correctHeroquote = ''
        this.primaryHero = null
      }
    }
    return null
  }
  makePrimaryCard(hero : Hero){
    this.correctHeroName = hero.name
    this.correctHeroimage = hero.image;
    this.correctHeroquote = hero.quote;
    this.primaryHero = hero
    this.correcrHeroStars = this.primaryHero.stars
  }
  trainHero(){
   if(this.primaryHero != null && this.primaryHero.stars < 5 ){
    if(this.users.localUser != undefined && this.users.localUser?.trainsToday < 5){
      this.primaryHero.stars++
      this.correcrHeroStars = this.primaryHero.stars
      this.users.localUser.trainsToday++
    }else if(this.users.localUser != undefined && this.users.localUser?.trainsToday === 5){

      this.isModalDisplay = true
     }
   }
  }
  isHeroMaxStars(){
    if(this.primaryHero != null && this.primaryHero.stars >= 5)
      return true
    return false
  }

}
