import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FirebaseFirestore } from 'angularfire2';
import * as firebase from 'firebase';
import { Movie } from 'src/app/_models/movie';


@Component({
  selector: 'app-releaselist',
  templateUrl: './releaselist.component.html',
  styleUrls: ['./releaselist.component.scss'],
})
export class ReleaselistComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() wrapMovies: number;
  @Output() setFavorite = new EventEmitter();

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
  setFavoriteMovie(movie) {
    this.setFavorite.emit(movie);
  }
}
