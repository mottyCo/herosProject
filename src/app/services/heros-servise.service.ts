import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root'
})

export class HerosServiseService {
 
  private jaimeLannister : Hero = new Hero('jaime lannister', 'If there are gods, why is the world so full of pain and injustice?', 'jaimeLannister.jpg')
  private bronnOfBlackwater: Hero = new Hero('bronn of blackwater','I saw you kill a man with a shield, you`ll be unstoppable with an axe','bronn.jpeg')
  private jonSnow : Hero = new Hero('jon snow','First lesson: stick em with the pointy end.','jonSnow.jpg')
  private sandorClegane : Hero = new Hero('sandor clegane','Any man dies with a clean sword, I`ll rape his fucking corpse!','theHound.jpeg')
  private oberynMartell : Hero = new Hero('oberyn martell','Size Doesn`t Matter When You`re Flat On Your Back.','oberynMartell.jpeg')
  private syrioForel : Hero = new Hero('syrio forel','There is only one God, and his name is Death. And there is only one thing we say to Death: Not Today!','syrioForel.jpg')
  private euronGreyjoy : Hero = new Hero('euron Greyjoy','The last Greyjoys left in the world. The last ones with balls anyway. If I kill you... who can I talk to?','euronGreyjoy.jpg')
  private barristanSelmy : Hero = new Hero('barristan Selmy','I`ve won more single combats than any man alive.','barristanSelmy.jpg')
  private robertBaratheon : Hero = new Hero('robert Baratheon','Wear it in silence or I`ll honor you again.','robertBaratheon.jpg')
  private lorasTyrell : Hero = new Hero('loras tyrell','Everybody knows everything about everyone', 'lorasTyrell.jpg')
  private brienneOfTarth : Hero = new Hero('brienne Of Tarth','I Don`t Care, I`m Not Your Mother.','brienne.jpg')
  private gregorClegane : Hero = new Hero('gregor clegane','I killed her screaming whelp. Then I raped her. Then I smashed her fucking head in. Like this.','theMountain.jpg')
  private aryaStark : Hero = new Hero('arya Stark','It`s Where All The Maps Stop. That`s Where I`m Going','aryaStark.jpg')
  private tormundGiantsbane : Hero = new Hero('tormund Giantsbane','From Now On, You`d Better Kneel Every Time I Fart.','tormund.jpg')
  getHeros(){
    return [
      this.jaimeLannister,
      this.bronnOfBlackwater,
      this.jonSnow,
      this.sandorClegane,
      this.oberynMartell,
      this.syrioForel,
      this.euronGreyjoy,
      this.barristanSelmy,
      this.robertBaratheon,
      this.lorasTyrell,
      this.brienneOfTarth,
      this.gregorClegane,
      this.aryaStark,
      this.tormundGiantsbane
    ]
  }
 

  constructor() { }
}
