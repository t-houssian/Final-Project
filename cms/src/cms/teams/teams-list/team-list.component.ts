import { Component, OnInit } from '@angular/core';
import { Team } from '../teams.model';
import { TeamService } from '../teams.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];
  subscription: Subscription;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.teamListChangedEvent.subscribe((teams: Team[]) => {
      this.teams = teams.slice();
      console.log(teams)
    });


    this.subscription = this.teamService.teamListChangedEvent.subscribe((teams: Team[]) => {
      this.teams = teams;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
