import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  players: Player[] = null;
  team:Team = new Team(1,"Catania","Cata","CTN","non lo so","www.catania.com","asdlfa","acehcn",1,"red-blue","CT Stadium",this.players);

  constructor() { }

  getTeam(){
    //METODO GET PER OTTENERE LA SQUADRA DA VISUALIZZARE
  }

  generateTeam(id:number):Team{
    return this.team;
  }
}
