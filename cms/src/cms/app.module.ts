import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { NbasComponent } from './nbas/nbas.component';
import { NbaListComponent } from './nbas/nba-list/nba-list.component';
import { NbaItemComponent } from './nbas/nba-item/nba-item.component';
import { NbaDetailComponent } from './nbas/nba-detail/nba-detail.component';
import { DropdownDirective } from './dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { NbaEditComponent } from './nbas/nba-edit/nba-edit.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamListComponent } from './teams/teams-list/team-list.component';
import { TeamItemComponent } from './teams/team-item/team-item.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NbasComponent,
    NbaListComponent,
    NbaItemComponent,
    NbaDetailComponent,
    DropdownDirective,
    NbaEditComponent,
    TeamsComponent,
    TeamListComponent,
    TeamItemComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DndModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
