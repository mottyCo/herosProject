import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class HerosServiseService {
 
  private jaimeLannister = {
    name: 'jaime lannister',
    quote: 'If there are gods, why is the world so full of pain and injustice?',
    image: 'jaimeLannister.jpg'
  }
  private bronnOfBlackwater = {
    name: 'bronn of blackwater',
    quote: 'I saw you kill a man with a shield, you`ll be unstoppable with an axe',
    image: 'bronn.jpeg'
  }
  private jonSnow = {
    name: 'jon snow',
    quote: 'First lesson: stick em with the pointy end.',
    image: 'jonSnow.jpg'
  }
  private sandorClegane = {
    name: 'sandor clegane',
    quote: 'Any man dies with a clean sword, I`ll rape his fucking corpse!',
    image: 'theHound.jpeg'
  }
  private oberynMartell = {
    name: 'oberyn martell',
    quote: 'Size Doesn`t Matter When You`re Flat On Your Back.',
    image: 'oberynMartell.jpeg'
  }
  private syrioForel = {
    name: 'syrio forel',
    quote: 'There is only one God, and his name is Death. And there is only one thing we say to Death: Not Today!',
    image: 'syrioForel.jpg'
  }
  private euronGreyjoy = {
    name: 'euron Greyjoy',
    quote: 'The last Greyjoys left in the world. The last ones with balls anyway. If I kill you... who can I talk to?',
    image: 'euronGreyjoy.jpg'
  }
  private barristanSelmy = {
    name: 'barristan Selmy',
    quote: 'I`ve won more single combats than any man alive.',
    image: 'barristanSelmy.jpg'
  }
  private robertBaratheon = {
    name: 'robert Baratheon',
    quote: 'Wear it in silence or I`ll honor you again.',
    image: 'robertBaratheon.jpg'
  }
  private lorasTyrell = {
    name: 'loras tyrell',
    quote: 'Everybody knows everything about everyone',
    image: 'lorasTyrell.jpg'
  }
  private brienneOfTarth = {
    name: 'brienne Of Tarth',
    quote: 'I Don`t Care, I`m Not Your Mother.',
    image: 'brienne.jpg'
  }
  private gregorClegane = {
    name: 'gregor clegane',
    quote: 'I killed her screaming whelp. Then I raped her. Then I smashed her fucking head in. Like this.',
    image: 'theMountain.jpg'
  }
  private aryaStark = {
    name: 'arya Stark',
    quote: 'It`s Where All The Maps Stop. That`s Where I`m Going',
    image: 'aryaStark.jpg'
  }
  private tormundGiantsbane = {
    name: 'tormund Giantsbane',
    quote: 'From Now On, You`d Better Kneel Every Time I Fart.',
    image: 'tormund.jpg'
  }


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
