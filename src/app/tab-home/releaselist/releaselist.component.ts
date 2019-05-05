import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FirebaseFirestore } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-releaselist',
  templateUrl: './releaselist.component.html',
  styleUrls: ['./releaselist.component.scss'],
})
export class ReleaselistComponent implements OnInit {
  @Input() movies: any[];
  @Input() wrapMovies: number;

  urlBaseImage: String = `${environment.moviedb.urlBaseImage}`;
  slideOpts = {
    effect: 'flip',
    pagination: false,

  };
  numberOfSlldes: number[];
  db: FirebaseFirestore = firebase.firestore();

  constructor() { }

  ngOnInit() {
    this.numberOfSlldes = Array(2);
  }
  setFavorite(movie) {
    if (!movie.favorite) {
      movie.favorite = true;
      this.db.collection("favoriteMovies").add(movie);
    }
    else {
      movie.favorite = !movie.favorite;
      this.db.collection("favoriteMovies").add(movie);

    }
  }
}
