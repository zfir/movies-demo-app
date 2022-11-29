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
  public viewerJSONOutput: Movie[] = [];

  private storedKey: number | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inProcessedJSON'] && this.inProcessedJSON?.key != undefined) {
      this.editorJSONOutput = JSON.stringify(this.inProcessedJSON?.movies, null, 2);
      this.viewerJSONOutput = JSON.parse(this.editorJSONOutput);
      this.storedKey = this.inProcessedJSON?.key as number;
    } else if (changes['inProcessedJSON'] && this.inProcessedJSON?.key == undefined && this.inProcessedJSON?.movies != undefined) {
      this.editorJSONOutput = JSON.stringify(this.inProcessedJSON?.movies, null, 2);
      this.viewerJSONOutput = JSON.parse(this.editorJSONOutput);
      this.storedKey = undefined;
    }
  }

  updateJSON(data: string): void {
    this.editorJSONOutput = data;
    this.viewerJSONOutput = JSON.parse(this.editorJSONOutput);
    this.outProcessedJSON.emit(
      {
        movies: this.viewerJSONOutput,
        key: this.storedKey
      }
    );
  }
}
