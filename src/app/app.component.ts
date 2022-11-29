import { Component } from '@angular/core';
import { Movie, ProcessedObject } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public processedJSON: ProcessedObject | undefined;

  updateProcessedJSON(data: ProcessedObject | undefined): void {
    this.processedJSON = data;
  }
}
