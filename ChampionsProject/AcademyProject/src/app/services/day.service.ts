import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { Days } from '../models/days';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  matches : Match[];
  c  :Match = new Match(1," SERIE A", "CAMPIONATO","27/01/2019","FINISHED","90",61009,"Venue", "27/01/2019","SERIE A ","MILAN","INTER","2-0");
  a : Match= new Match(12," SERIE A", "CAMPIONATO","27/01/2019","FINISHED","90",61009,"Venue", "27/01/2019","SERIE A ","MILAN","INTER","2-0");
  giornata :Days;
  constructor() { }

  getDailyMatch(){
    //METODO GET PER OTTENERE LA GIORNATA DA VISUALIZZARE
  }

  generateDailyMatch(id:number):Days{
    //THIS.MATCH = GETMATCHINFO(ID);
    this.giornata=new Days(id,[this.a,this.c]);
    return this.giornata;
  }
}
