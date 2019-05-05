import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { defineBase } from '@angular/core/src/render3';
import { FirebaseFirestore } from 'angularfire2';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss'],
})
export class MylistComponent implements OnInit {
  @Input() movies: any[];
  urlBaseImage: String = `${environment.moviedb.urlBaseImage}`;
  slideOpts = {
    effect: 'flip',
    pagination: false

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
