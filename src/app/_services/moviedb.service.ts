import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { FirebaseFirestore } from 'angularfire2';
import * as firebase from 'firebase';
import { Movie } from '../_models/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor(private requestService: RequestService) { }
  db: FirebaseFirestore = firebase.firestore();

  get(): Observable<any> {
    return this.requestService.get<any>('', null);
  }
  wrapMovieList(movies: number): number {

    if (movies > 5) {
      if (movies % 5 === 0) {
        return movies / 5;
      } else {
        return (movies / 5) + 1;
      }
    } else { return 1; }
  }
  getFavoriteMovies(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      this.db.collection('favoriteMovies').where('favorite', '==', true)
        .get()
        .then((querySnapshot: any) => {
          const docs = querySnapshot.docs.map(doc => {
            const movie = doc.data();
            movie.idDb = doc.id;
            return movie;
          });
          resolve(docs);
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
          reject(error);
        });
    });
  }
}
