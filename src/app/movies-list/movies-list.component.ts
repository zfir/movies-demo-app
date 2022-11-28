import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Movie, MovieController } from '../models/movie';
import { MoviesAPIService } from '../movies-api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Output() processedJSON = new EventEmitter<Movie[]>;

  public movies: Movie[] = [];

  private moviesAPIService = inject(MoviesAPIService);

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.moviesAPIService.getMovies().subscribe((data) => {
      this.movies = Object.values(data)[2] as Movie[];
    });
  }

  convertToJSON(data: Movie): void {
    let modifiedMovie: Movie = {
      title: '',
      description: '',
      score: 0
    };
    for (let key of MovieController.allowedKeys) {
      modifiedMovie[key] = data[key];
    }
    this.processedJSON.emit([modifiedMovie]);
  }

  convertToJSONAll() {
    this.processedJSON.emit(this.movies);
  }
}
