export interface Ihero {
    name: string,
    quote: string,
    image: string
}


export class Hero implements Ihero{
    
    name!: string ;
    quote!: string;
    image!: string;

  
    constructor(name: string, quote: string, image: string) {
        this.name = name;
        this.image = image;
        this.quote = quote;
    }

}