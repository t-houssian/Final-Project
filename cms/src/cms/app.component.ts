import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA Dream Lineup!';
  selectedFeature:string = "nba"

  switchView(selectedFeature:string){
    this.selectedFeature = selectedFeature;
  }

}
