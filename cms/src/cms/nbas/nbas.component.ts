import { Component, OnInit} from '@angular/core';
import { Nba } from './nbas.model';
import { NbaService } from './nbas.service';

@Component({
  selector: 'app-nbas',
  templateUrl: './nbas.component.html',
  styleUrls: ['./nbas.component.css'],
})
export class NbasComponent implements OnInit {
  selectedNba: Nba;

  constructor(private nbaService: NbaService) { }

  ngOnInit(): void {
    this.nbaService.nbaSelectedEvent
      .subscribe(
        (nbas:Nba[])=>{
          nbas = nbas;
        }
      )
  }

}
