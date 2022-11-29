import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Movie, ProcessedJSON } from '../models/movie';
import { MoviesAPIService } from '../movies-api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnChanges {
  @Input() inProcessedObject: ProcessedJSON | undefined;
  @Output() outProcessedJSON = new EventEmitter<ProcessedJSON | undefined>;

  public movies: Movie[] = [];

  private moviesAPIService = inject(MoviesAPIService);

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inProcessedObject'] && this.inProcessedObject?.key != undefined) {
      this.movies[this.inProcessedObject?.key] = (this.inProcessedObject?.movies as Movie[])[0];
    } else if (changes['inProcessedObject'] && this.inProcessedObject?.key == undefined) {
      this.movies = this.inProcessedObject?.movies as Movie[];
    }
  }

  async ngOnInit(): Promise<void> {
    this.moviesAPIService.getMovies().subscribe((data) => {
      this.movies = Object.values(data)[2] as Movie[];
    });
  }

  convertToObject(data: Movie, index: number): void {
    let modifiedMovie: Movie = new Movie(data.title, data.description, data.score);
    this.outProcessedJSON.emit(
      { 
        movies: [modifiedMovie], 
        key: index
      }
    );
  }

  convertToObjectAll() {
    this.outProcessedJSON.emit(
      { 
        movies: this.movies, 
        key: undefined 
      }
    );
  }
}
