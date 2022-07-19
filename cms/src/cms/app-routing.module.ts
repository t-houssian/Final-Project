import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NbaDetailComponent } from "./nbas/nba-detail/nba-detail.component";
import { NbaEditComponent } from "./nbas/nba-edit/nba-edit.component";
import { NbasComponent } from './nbas/nbas.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/nbas', pathMatch: 'full' },
    { path: 'nbas', component: NbasComponent, children: [
        { path: 'new', component: NbaEditComponent },
        { path: ':FULL_NAME', component: NbaDetailComponent },
        { path: ':FULL_NAME/edit', component: NbaEditComponent }
    ] },
    { path: 'teams', component: TeamsComponent, children: [
      { path: ':TEAM', component: TeamDetailComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
