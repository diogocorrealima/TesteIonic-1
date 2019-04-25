import { MoviedbService } from '../_services/moviedb.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

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
  constructor(
    private movieDbService: MoviedbService,
    private splashScreen: SplashScreen,
    ) {

  }
  ngOnInit(): void {
    // this.splashScreen.show();
    this.getMovies();
  }

  getMovies() {
    this.movieDbService.get().subscribe(movies => {
      this.movies = movies.items;
      this.wrapMovies = this.movieDbService.wrapMovieList(this.movies.length)
    });
  }

}

