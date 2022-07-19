import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Subject } from 'rxjs';
import { Team } from './teams.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  players: Team[] = [];
  teams = [];
  t = [];
  teamSelectedEvent: EventEmitter<Team> = new EventEmitter<Team>();
  teamChangedEvent: EventEmitter<Team[]> = new EventEmitter<Team[]>();
  teamListChangedEvent: Subject<Team[]> = new Subject<Team[]>();
  maxTeamId: number;

  constructor(private http: HttpClient) {
    this.getTeams();
  }

  getTeams(): void {
    this
    .http
    .get<{message: string, teams: Team[]}>('http://localhost:3000/teams')
    .subscribe((response: any) => {
      const unique = [...new Set(response.teams.map(item => item.TEAM))];
      this.teams = unique;
      this.players = response.teams

      this.teamListChangedEvent.next(this.teams.slice());
    }, (err: any) => {
      console.error(err);
    });
  }

  getTeam(TEAM: string): Team[] {
    if (!this.players) {
      return null;
    }
    
    function isTeam(x) {
      return x.TEAM == TEAM;
    }

    return this.players.filter(isTeam);;

  }

}