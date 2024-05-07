export interface Ihero {
    name: string,
    quote: string,
    image: string,
    stars: number,
}


export class Hero implements Ihero{
    
    name!: string ;
    quote!: string;
    image!: string;
    stars: number = 0;
  
    constructor(name: string, quote: string, image: string) {
        this.name = name;
        this.image = image;
        this.quote = quote;
    }

}