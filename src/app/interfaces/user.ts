import { Hero } from "./hero"

export interface IUser {
    userName: string,
    email: string,
    password: string,
    heros: Hero[],
    trainsToday: number
}
export class User implements IUser{
    userName!: string
    email!: string
    password!: string
    heros: Hero[] = []
    trainsToday: number = 0
    constructor(userName: string, email: string, password: string){
        this.userName = userName
        this.email = email
        this.password = password
    }
}
