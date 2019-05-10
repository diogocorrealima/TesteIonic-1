import { MoviedbService } from '../_services/moviedb.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FirebaseFirestore } from 'angularfire2';
import * as firebase from 'firebase';
import { Movie } from '../_models/movie';

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
  movies: Movie[];
  urlBaseImage: String = `${environment.moviedb.urlBaseImage}`;
  logoPath: String = 'assets/icon.png';
  wrapMovies: number;
  db: FirebaseFirestore = firebase.firestore();
  favoriteMovies: Movie[];

  constructor(
    private movieDbService: MoviedbService,
    private splashScreen: SplashScreen,
  ) {

  }
  ngOnInit(): void {
    this.splashScreen.show();
    this.getFavoriteMovies();
  }

  getMovies() {
    this.movieDbService.get().subscribe(movies => {
      this.movies = movies.items;
      this.favoriteMovies.map(fmovie => {
        if (fmovie.favorite) {
          this.movies.map(movie => {
            if (movie.id === fmovie.id) {
              movie.favorite = true;
            }
          });
        }
      });
      this.wrapMovies = this.movieDbService.wrapMovieList(this.movies.length);

    });
  }
  getFavoriteMovies() {
    this.movieDbService.getFavoriteMovies().then((data) => {
      this.favoriteMovies = data;
      this.getMovies();

    });
  }
  setFavorite(movie: Movie) {
    if (!movie.favorite) {
      movie.favorite = true;
      this.db.collection('favoriteMovies').add(movie);
    } else {
      movie.favorite = !movie.favorite;
      const favoriteMovieToDelete = this.favoriteMovies.map(fmovie => {
        if (fmovie.id === movie.id) {
          return fmovie;
        }
      })[0];
      if (favoriteMovieToDelete) {
        this.db.collection('favoriteMovies').doc(favoriteMovieToDelete.idDb).delete().then();
      }

    }
    this.getFavoriteMovies();
  }
}

