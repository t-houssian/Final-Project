import { Component, OnInit} from '@angular/core';
import { Team } from './teams.model';
import { TeamService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  selectedTeam: Team;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.teamSelectedEvent
      .subscribe(
        (teams:Team[])=>{
          teams = teams;
        }
      )
  }

}
