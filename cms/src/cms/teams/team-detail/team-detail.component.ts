import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WinRefService } from 'src/cms/win-ref.service';
import { Team } from '../teams.model';
import { TeamService } from '../teams.service';

@Component({
  selector: 'cms-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  players: Team[];
  nativeWindow: any;
  points = 0;

  constructor(
    private teamService: TeamService, 
    private router: Router, 
    private route: ActivatedRoute,
    private WindRefService: WinRefService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log("yo");
        this.players = this.teamService.getTeam(params['TEAM']);
        console.log(this.teamService.getTeam(params['TEAM']));
      }
    );

    this.nativeWindow = this.WindRefService.getNativeWindow();
  }

  onView()  {
    if(this.players)  {
      this.nativeWindow.open(this.players);
    }
  }

}
