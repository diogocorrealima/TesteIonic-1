import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import { defineBase } from '@angular/core/src/render3';
import { FirebaseFirestore } from 'angularfire2';
import { MoviedbService } from 'src/app/_services/moviedb.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss'],
})
export class MylistComponent implements OnInit {
  @Input() movies: any[];
  @Output() setFavorite = new EventEmitter();

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
  setFavoriteMovie(movie) {
    this.setFavorite.emit(movie);
  }
}
