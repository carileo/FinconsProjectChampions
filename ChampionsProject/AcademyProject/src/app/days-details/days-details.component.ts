import { Component, OnInit } from '@angular/core';
import { DayService } from '../services/day.service';
import { Match } from '../models/match';
import { Days } from '../models/days';

@Component({
  selector: 'app-days-details',
  templateUrl: './days-details.component.html',
  styleUrls: ['./days-details.component.css']
})
export class DaysDetailsComponent implements OnInit {
  matches : Match[] =null;
  giornata : Days= null;
  constructor(private dayService:DayService) { }

  ngOnInit() {
    this.generateDailyMatch();
  }
  generateDailyMatch(){
     this.giornata = this.dayService.generateDailyMatch(2019);
  }
}
