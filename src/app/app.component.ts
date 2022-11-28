import { Component } from '@angular/core';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public processedJSON: Movie[] = [];

  updateProcessedJSON(data: Movie[]): void {
    this.processedJSON = data;
  }
}
