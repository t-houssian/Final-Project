import { Component, OnInit, Input } from '@angular/core';
import { Nba } from '../nbas.model';

@Component({
  selector: 'cms-nba-item',
  templateUrl: './nba-item.component.html',
  styleUrls: ['./nba-item.component.css']
})
export class NbaItemComponent implements OnInit {
  @Input() nbas: Nba;

  constructor() { }

  ngOnInit(): void {
  }

}
