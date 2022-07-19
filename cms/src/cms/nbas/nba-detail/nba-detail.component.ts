import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WinRefService } from 'src/cms/win-ref.service';
import { Nba } from '../nbas.model';
import { NbaService } from '../nbas.service';

@Component({
  selector: 'cms-nba-detail',
  templateUrl: './nba-detail.component.html',
  styleUrls: ['./nba-detail.component.css']
})
export class NbaDetailComponent implements OnInit {
  nbas: Nba;
  nativeWindow: any;

  constructor(
    private nbaService: NbaService, 
    private router: Router, 
    private route: ActivatedRoute,
    private WindRefService: WinRefService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.nbas = this.nbaService.getNba(params['FULL_NAME']);
      }
    );

    this.nativeWindow = this.WindRefService.getNativeWindow();
  }

  onView()  {
    if(this.nbas.FULL_NAME)  {
      this.nativeWindow.open(this.nbas.FULL_NAME);
    }
  }

  onDelete()  {
    this.nbaService.deleteNba(this.nbas);
    this.router.navigate(['/nbas']);
  }

}
