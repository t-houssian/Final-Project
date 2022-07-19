import { Component, OnInit } from '@angular/core';
import { Nba } from '../nbas.model';
import { NbaService } from '../nbas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-nba-list',
  templateUrl: './nba-list.component.html',
  styleUrls: ['./nba-list.component.css']
})
export class NbaListComponent implements OnInit {
  nbas: Nba[] = [];
  subscription: Subscription;

  constructor(private nbaService: NbaService) { }

  ngOnInit(): void {
    this.nbaService.nbaListChangedEvent.subscribe((nbas: Nba[]) => {
      this.nbas = nbas.slice();
      console.log(nbas)
    });


    this.subscription = this.nbaService.nbaListChangedEvent.subscribe((nbas: Nba[]) => {
      this.nbas = nbas;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
