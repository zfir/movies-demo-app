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

  public editorJSONOutput: string = "";

  ngOnChanges(): void {
    this.editorJSONOutput = JSON.stringify(this.processedJSON, null, 2);
  }
}
