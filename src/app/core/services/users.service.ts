import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { HerosServiseService } from './heros-servise.service';
import { Hero } from '../../interfaces/hero';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  globalHerosCollection = this.hero.getHeros()

  private user1 : User = new User('usera', 'a@a', 'aaaaaaa1')
  private user2 : User = new User('userb', 'b@b', 'bbbbbbb1')
  private user3 : User = new User('userc', 'c@c', 'ccccccc1')
  private user4 : User = new User('userd', 'd@d', 'eeeeeee1')
  private user5 : User = new User('usere', 'e@e', 'fffffff1')
  localUser : User | null = null
  users: User[] = [
    this.user1,
    this.user2,
    this.user3,
    this.user4,
    this.user5,
  ]

  addHeroIntoUserCollection(heroName:string):null{
    for(let hero of this.globalHerosCollection){
      if(hero.name === heroName){
        this.localUser?.heros.push(new Hero(hero.name, hero.quote, hero.image))
        return null
      }
    }
    return null
  }
  removeHeroFromUserCollection(hero: Hero):null{
    let index = -1
    if(this.localUser != null){
      for (let i = 0; i < this.localUser?.heros?.length; i++) {
        if(hero.name === this.localUser?.heros[i].name){
          index = i 
          break
        }   
      }
    }
    
    if(index > -1){
      this.localUser?.heros.splice(index, 1)
    }
    return null
  }
  isHeroMaxStars(hero : Hero | null){
    if(hero != null && hero.stars >= 5)
      return true
    return false
  }
  trainHero(hero : Hero | null): boolean{
    if(hero != null && hero.stars < 5 ){
     if(this.localUser != undefined && this.localUser?.trainsToday < 5){
       hero.stars++
       
       this.localUser.trainsToday++
     }else if(this.localUser != undefined && this.localUser?.trainsToday === 5){
        return true
       
      }
    }
    return false
   }
   canUserLogIn(userName : string, password : string): boolean{
    for (let i = 0; i < this.users.length; i++) {
      if(userName === this.users[i].userName && password === this.users[i].password){
        this.localUser = this.users[i]
        this.router.navigate(['user/localUser'])
        return true
      }
      if(i+1 === this.users.length){
        
        return false
      }  
    }
    return false
   }
   addUser(userName : string, email:string, password:string, ){
    this.localUser = new User(userName, email, password)
    this.users.push(this.localUser)
    this.router.navigate(['user/localUser'])
    
   }
  // static localUser: any;
  constructor(private hero : HerosServiseService,private router : Router) { }
}


