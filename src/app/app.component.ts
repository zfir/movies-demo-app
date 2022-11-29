import { Component } from '@angular/core';
import { Movie, ProcessedObject } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public processedObject: ProcessedObject | undefined;

  updateProcessedObject(data: ProcessedObject | undefined): void {
    this.processedObject = data;
  }
}
