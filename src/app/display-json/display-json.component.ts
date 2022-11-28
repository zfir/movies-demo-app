import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Movie, ProcessedJSON } from '../models/movie';

@Component({
  selector: 'app-display-json',
  templateUrl: './display-json.component.html',
  styleUrls: ['./display-json.component.css']
})
export class DisplayJSONComponent implements OnChanges {
  @Input() inProcessedJSON: ProcessedJSON | undefined;
  @Output() outProcessedJSON = new EventEmitter<ProcessedJSON | undefined>;

  public editorJSONOutput: string = "";
  public viewerJSONOutput: ProcessedJSON | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inProcessedJSON']) {
      this.editorJSONOutput = JSON.stringify(this.inProcessedJSON, null, 2);
      this.viewerJSONOutput = this.inProcessedJSON as ProcessedJSON | undefined;
    }
  }

  updateJSON(data: string): void {
    this.editorJSONOutput = data;
    this.viewerJSONOutput = JSON.parse(data) as ProcessedJSON | undefined;
    this.outProcessedJSON.emit(this.viewerJSONOutput);
  }
}
