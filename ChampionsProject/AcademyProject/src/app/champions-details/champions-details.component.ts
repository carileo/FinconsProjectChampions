import { Component, OnInit } from '@angular/core';
import { Days } from '../models/days';

@Component({
  selector: 'app-champions-details',
  templateUrl: './champions-details.component.html',
  styleUrls: ['./champions-details.component.css']
})
export class ChampionsDetailsComponent implements OnInit {
  champions : Days[] = null;
  idSelected: number = null;
  constructor() { }

  ngOnInit() {
    this.generateChampions(this.idSelected) // SERIEA ID;
  }
  generateChampions(id: number): void {
    this.champions.push();
  }
}
