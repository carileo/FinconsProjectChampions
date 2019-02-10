import { Player } from './player';

export class Team{
constructor(public id : number , public name : string , public shortName : string ,
    public tla : string ,  public address:string ,public website : string , public phone : string,
   public email:string,  public founded: number, public clubColors:string , public venue:string,
   public squadPlayer: Player[]){}
    
}