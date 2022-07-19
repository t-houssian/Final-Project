import { Component, OnInit } from '@angular/core';
import { Nba } from '../nbas.model';
import { NbaService } from '../nbas.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cms-nba-edit',
  templateUrl: './nba-edit.component.html',
  styleUrls: ['./nba-edit.component.css']
})
export class NbaEditComponent implements OnInit {
  originalNba: Nba;
  nba: Nba;
  editMode: boolean = false;

  constructor(
    private nbaService: NbaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.editMode = false;
      let FULL_NAME = params['FULL_NAME'];
      if (FULL_NAME === null || FULL_NAME === undefined) {
        return;
      }

      let nba = this.nbaService.getNba(FULL_NAME);
      if (!nba) {
        return;
      }

      this.originalNba = nba;
      this.editMode = true;
      this.nba = JSON.parse(JSON.stringify(nba));
    });
  }

  onSubmit(form: NgForm) {
    let nba = new Nba(
      form.value.FULL_NAME,
      form.value.TEAM,
      form.value.POS,
      form.value.AGE,
      form.value.GP,
      form.value.MPG,
      form.value.MINPerc,
      form.value.USGPerc,
      form.value.TOPerc,
      form.value.FTA,
      form.value.FTPerc,
      form.value.TwoPA,
      form.value.TwoPPerc,
      form.value.ThreePA,
      form.value.ThreePPerc,
      form.value.eFGPerc,
      form.value.TSPerc,
      form.value.PPG,
      form.value.RPG,
      form.value.TRBPerc,
      form.value.APG,
      form.value.ASTPerc,
      form.value.SPG,
      form.value.BPG,
      form.value.TOPG,
      form.value.VIVersatility,
      form.value.ORTG,
      form.value.DRTG
      );
    if (this.editMode === true) {
      this.nbaService.updateNba(this.originalNba, nba);
    } else {
      this.nbaService.addNba(nba);
    }

    this.router.navigate(['/nbas']);
  }

  onCancel() {
    this.router.navigate(['/nbas']);
  }
}