import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {
  private httpClient = inject(HttpClient);

  constructor() {}

  getMovies(): Observable<any> {
    return this.httpClient.get("http://api.filmon.com/api/vod/search?term=Bruce&max_results=10&genre=action");
  }
}
