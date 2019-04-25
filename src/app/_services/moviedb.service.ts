import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor(private requestService: RequestService) { }

  get(): Observable<any> {
    return this.requestService.get<any>('', null);
  }
  wrapMovieList(movies: number): number {

    if (movies > 5) {
      if (movies % 5 == 0) {
        return movies / 5
      }
      else {
        return (movies / 5) + 1
      }
    }
    else { return 1; }
  }

}
