import { Component } from '@angular/core';
import { HerosServiseService } from '../../../../core/services/heros-servise.service';
import { UsersService } from '../../../../core/services/users.service';
import { Hero } from '../../../../interfaces/hero';

@Component({
  selector: 'app-local-user-section',
  templateUrl: './local-user-section.component.html',
  styleUrl: './local-user-section.component.css'
})
export class LocalUserSectionComponent {
  constructor(private heros: HerosServiseService, private users : UsersService,) { 
    this.localUser_globalHerosCollection = this.heros.getHeros()
    // this.userHerosCollection = this.globalHerosCollection
    if(this.users.localUser?.heros != undefined)
      this.localUser_userHerosCollection = this.users.localUser?.heros 
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
  localUser_correcrHeroStars: number= 0

  

  isUserOwnThisCard(hero: Hero):boolean{
    for(let userHero of this.localUser_userHerosCollection)
      if(userHero.name === hero.name)
        return true
    return false
  }

  addHeroIntoUserCollection(heroName:string):null{
    return this.users.addHeroIntoUserCollection(heroName)
  }
  removeHeroFromUserCollection(hero: Hero):null{
    this.users.removeHeroFromUserCollection(hero)
      if(hero.name === this.localUser_correctHeroName){
        this.localUser_correctHeroName = '';
        this.localUser_correctHeroimage = '';
        this.localUser_correctHeroquote = ''
        this.localUser_primaryHero = null
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
    if(this.users.trainHero(this.localUser_primaryHero) === true)
      this.localUser_isModalDisplay = true
    if(this.localUser_primaryHero != null)
      this.localUser_correcrHeroStars = this.localUser_primaryHero?.stars
  }
  isHeroMaxStars(){
    return this.users.isHeroMaxStars(this.localUser_primaryHero)
  }

}
