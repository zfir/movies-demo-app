import { Component } from '@angular/core';
import { Movie, ProcessedJSON } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public processedJSON: ProcessedJSON | undefined;

  updateProcessedJSON(data: ProcessedJSON | undefined): void {
    this.processedJSON = data;
  }
}
