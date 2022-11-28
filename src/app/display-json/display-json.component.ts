import { Component, Input, OnChanges } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-display-json',
  templateUrl: './display-json.component.html',
  styleUrls: ['./display-json.component.css']
})
export class DisplayJSONComponent implements OnChanges {
  @Input()
  processedJSON: Movie[] = [];

  public displayProcessedJSON: string | undefined;

  ngOnChanges(): void {
    this.displayProcessedJSON = JSON.stringify(this.processedJSON);
  }
}
