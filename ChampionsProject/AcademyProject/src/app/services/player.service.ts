import { Injectable } from '@angular/core';
import {Player} from '../models/player';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private player : Player =null;

  constructor( ) { }


  generatePlayer() : Player {
    //THIS.PLAYER = GETPLAYERINFO(ID);
    this.player=new Player(1,"Ciao","25/09/2020","ita","cc", 9);
    return this.player;
  }

  getPlayerInfo(id: number){
    //METODO GET PER OTTENERE IL PLAYER DA VISUALIZZARE
  }
}
