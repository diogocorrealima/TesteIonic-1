import { MoviedbService } from '../_services/moviedb.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FirebaseFirestore } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab-home',
  templateUrl: 'tab-home.page.html',
  styleUrls: ['tab-home.page.scss']
})
export class TabHomePage implements OnInit {
  slideOpts = {
    effect: 'flip',
    pagination: false

  };
  movies: any[];
  urlBaseImage: String = `${environment.moviedb.urlBaseImage}`;
  logoPath: String = 'assets/icon.png';
  wrapMovies: number;
  db: FirebaseFirestore = firebase.firestore();
  favoriteMovies: any[];

  constructor(
    private movieDbService: MoviedbService,
    private splashScreen: SplashScreen,
  ) {

  }
  ngOnInit(): void {
    // this.splashScreen.show();
    this.getMovies();
    this.getFavoriteMovies();
  }

  getMovies() {
    this.movieDbService.get().subscribe(movies => {
      this.movies = movies.items;
      this.wrapMovies = this.movieDbService.wrapMovieList(this.movies.length)
    });
  }
  getFavoriteMovies() {
    
this.db.collection("favoriteMovies").get()
      .then(function (querySnapshot) {
        var cloudMovies = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          cloudMovies.push(doc.data());
        });
        return cloudMovies;
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
}

