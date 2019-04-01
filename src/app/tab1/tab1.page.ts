import { MoviedbService } from './../_services/moviedb.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slideOpts = {
    effect: 'flip'
  };
  movieList: any[];
  urlBaseImage: String = `${environment.moviedb.urlBaseImage}`;
  constructor(private movieDbService: MoviedbService) {

  }
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    return this.movieDbService.get().subscribe(movies => {
      this.movieList = movies.items;
      console.log(this.movieList);
    });
  }
}

