import { Injectable } from '@angular/core';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {


  match: Match = new Match(1,"boh","2019","lalala","finished",null,3,"non lo so","33-02","finale","Catania","Bari","3-0");


  constructor() { }

  getSingleMatch(){
    //METODO GET PER OTTENERE IL MATCH DA VISUALIZZARE
  }

  generateSingleMatch(id: number): Match{

    return this.match;
  }
}
