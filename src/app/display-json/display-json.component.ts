import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Movie, ProcessedJSON } from '../models/movie';

@Component({
  selector: 'app-display-json',
  templateUrl: './display-json.component.html',
  styleUrls: ['./display-json.component.css']
})
export class DisplayJSONComponent implements OnChanges {
  @Input() inProcessedObject: ProcessedJSON | undefined;
  @Output() outProcessedJSON = new EventEmitter<ProcessedJSON | undefined>;

  public editorJSONOutput: string = "";
  public viewerJSONOutput: Movie[] = [];

  private storedKey: number | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inProcessedObject'] && this.inProcessedObject?.key != undefined) {
      this.editorJSONOutput = JSON.stringify(this.inProcessedObject?.movies, null, 2);
      this.viewerJSONOutput = JSON.parse(this.editorJSONOutput);
      this.storedKey = this.inProcessedObject?.key as number;
    } else if (changes['inProcessedObject'] && this.inProcessedObject?.key == undefined && this.inProcessedObject?.movies != undefined) {
      this.editorJSONOutput = JSON.stringify(this.inProcessedObject?.movies, null, 2);
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
