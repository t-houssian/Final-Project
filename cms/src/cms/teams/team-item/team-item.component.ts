import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../teams.model';

@Component({
  selector: 'cms-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.css']
})
export class TeamItemComponent implements OnInit {
  @Input() teams: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
