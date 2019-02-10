import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player : Player =null;
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.generatePlayer();
  }
  generatePlayer(): void {
    this.player=this.playerService.generatePlayer();

  }
}
